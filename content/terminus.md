
# Terminus - jobbkalender og lønnsoversikt

Dette er en Android applikasjon jeg laget for å gjøre det lettere å holde oversikt over arbeidstider og egen inntekt. Appen har deremed to hovedformål:

1. **Holde oversikt over arbeidsvakter for brukeren**
2. **Gjøre det mulig for brukeren å holde oversikt over egen inntekt**

**Last ned appen her: ** https://play.google.com/store/apps/details?id=com.birkeland.terminus

NB: Minimumskrav : Android  8.0 Oreo

## Kalender
<div class="imageContainer">
    <img src="https://i.imgur.com/G5uHCJX.png" alt="Kitten"
        title="Bilde av kalenderen" width="300" height="600" />
    <img src="https://i.imgur.com/TwFtC4R.png"
            title="Bilde av vaktopsett"width="300" height="600" />
</div>


Hovedkomponentet i appen er naturligvis kalenderen. Kort oppsummert kan brukeren bla gjennom en kalender fra månde til månde og registrere arbeidsvakter. Videre kan brukeren registrere en eller flere jobber. Her oppgis timelønn og eventuelle timer hvor angitte lønnstillegg eller fradrag gjelder. Disse variablene blir brukt i lønnskalkulator-komponentet av applikasjonen til flere formål (mer om dette videre i artikkelen.).
For å registrere vakter i terminus må brukeren velge aktuell dag i kalenderen og trykke "ny vakt". Her kan/må man fylle inn følgende informasjon:

 - Start og sluttid på vakten (nattevakt må sjekkes av)
 - Pauselengde
 - Overtid, evt. hvor mange prosent av timelønna som blir tillagt
 - Arbeidsplass
 - Skattefradrag (ikke implementert per idag)
 
 ## Lønnsoversikt
<div class="imageContainer">
    <img src="https://i.imgur.com/BL3oKTx.png"
        title="Bilde av lønnsslipp" width="300" height="600"/>
    <img src="https://i.imgur.com/WwKVThe.png"
        title="Bilde av lønnsslipp"width="300" height="600"/>
</div>

 Ut i fra dataene appen får fra brukeren via vakter som er satt opp, regner applikasjonen automatisk ut brutto og netto månedslønn for hver måned. Disse er basert på brukerdefinerte lønningsperioder, og dermed kan brukeren få et godt estimat på hva de får på lønnslippen. For å regne nettolønn angir brukeren skattemetode, enten det er tabelltrekk eller prosenttrekk. 
 
 Alle de norske skattetabellene er implementert i applikasjonen (2020). I lønnsoversikten er det også mulig å se en graf over årets bruttoinntekt fram til dags dato. Denne grafen gjelder på tvers av jobber og grafer fra start til slutt av hver måned. Altså viser grafen **IKKE** bruttolønn fra lønnsslipp til lønnsslipp.

## Teknisk
<div class="imageContainer">
    <img src="https://i.imgur.com/voFYX9e.png" 
    title="Klasseflyt-diagram" width="800" height="600"/>
</div>

Applikasjonen baserer seg i all hovedsak på to lister med objekter:

 - Liste over alle jobber
 - Liste over alle vakter

Disse listene er lagret lokalt på enheten på JSON format, og blir brukt for administrering av vakter, jobber og i lønnskalkulatoren. 

<div class="imageContainer">
    <img src="https://i.imgur.com/Ih1diIV.png"
    title="Datadiagram" width="800" height="350">
</div>

Lønnskalkulatoren fungerer itterativt slik at den regner ut lønn på et minutt-til-minutt basis. Slik kan den regne mer nøyaktig i forhold til ulike perioder med lønnstillegg og fradrag, og komme ut med en mer korrekt sum. Problemet med dette er at ikke alle arbeidsplasser regner lønn på denne måten, og dermed blir resultatet ikke helt korrekt for alle. Dette er en av mange grunner til at beregningene i applikasjonen ikke kommer til å stemme helt overens med faktisk utbetaling. Under kan du lese all kildekoden bak lønnskalkulatoren:
```java
package com.birkeland.terminus;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.birkeland.terminus.DataClasses.Job;
import com.birkeland.terminus.DataClasses.SalaryRule;
import com.birkeland.terminus.DataClasses.WorkdayEvent;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DateFormat;
import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import static android.content.Context.MODE_PRIVATE;
import static com.birkeland.terminus.MainActivity.NORWEGIAN;

public class PayCalculator {

    public int totalHours;
    private String startDateStr;
    private String endDateStr;
    private Context mContext;
    private double feriepengFaktor = 0.12;
    public PayCalculator(List<WorkdayEvent> workdayEvents , Context context) {
        mContext = context;
    }

    public String getStartDateStr() {
        return startDateStr;
    }

    public String getEndDateStr() {
        return endDateStr;
    }

    public int getEarnings(List<WorkdayEvent> workdayEvents){
        double sum=0;
        try {
            for (WorkdayEvent event : workdayEvents) {
                LocalTime startTime = LocalTime.parse(event.getStartTime(), DateTimeFormatter.ofPattern("HH:mm"));
                LocalTime endTime = LocalTime.parse(event.getEndTime(), DateTimeFormatter.ofPattern("HH:mm"));
                List<SalaryRule> salaryRulesList = new ArrayList<>();
                // Hopper over tillegg dersom vakten er overtid
                if (!event.isOvertime()){
                    for (SalaryRule rule : event.getJob().getSalaryRules()) {
                        for (DayOfWeek dayOfWeek : rule.getDaysOfWeek()) {
                            if (dayOfWeek.toString().equals(event.getDayOfWeek())) {
                                salaryRulesList.add(rule);
                                Log.d("ADD", "Salary Rule added");
                            }
                        }
                    }
                }
                int breakMinutes = 0;
                // Hopp over pause dersom den ikke er betalt
                if (!event.getJob().hasPaidBreak()) {
                    breakMinutes = event.getBreakTime();
                }
                double salary = event.getJob().getSalary();
                // Itererer gjennom hvert minutt av arbeidsdagen og finner ut lønn
                while (!startTime.equals(endTime)) {
                    if(breakMinutes > 0){
                        breakMinutes--;
                        startTime = startTime.plusMinutes(1);
                        continue;
                    }
                    double currentSalary = salary;
                    for (SalaryRule salaryRule : salaryRulesList) {
                        LocalTime ruleStartTime = LocalTime.parse(salaryRule.getStartTime(), DateTimeFormatter.ofPattern("HH:mm"));
                        LocalTime ruleEndTime = LocalTime.parse(salaryRule.getEndTime(), DateTimeFormatter.ofPattern("HH:mm"));
                        if (startTime.isAfter(ruleStartTime) && startTime.isBefore(ruleEndTime)) {
                            currentSalary += salaryRule.getChangeInPay();
                        }
                    }
                    if(event.isOvertime()){
                        currentSalary += currentSalary*(event.getOvertimePercentage()/100);
                    }
                    // Legg til minutlønn i sum
                    sum += currentSalary / 60;
                    startTime = startTime.plusMinutes(1);
                }
            }
        }catch (NullPointerException e){
            Log.e("Null","No workday events in list");
        }
        return (int) sum;
    }

    private String formatDate(LocalDate date){
        Instant instant = date.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Date date1 = new Date(instant.toEpochMilli());
        // Formaterer etter system default språk
        DateFormat df = DateFormat.getDateInstance(DateFormat.DATE_FIELD);
        return df.format(date1);
    }

    public int getMonthlyEarnings(List<WorkdayEvent> workdayEvents ,int month){
        LocalDate now = LocalDate.now();
        List<WorkdayEvent> eventsToCalculate = new ArrayList<>();
        try {
            for (WorkdayEvent event : workdayEvents) {
                LocalDate eventDate = LocalDate.parse(event.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                // Hopp over event dersom den ikke er i valgte måned og gjeldende år
                if(eventDate.getMonthValue() != month ||eventDate.getYear()!= now.getYear() || eventDate.isAfter(now)){
                    Log.d("skipping","month: " + eventDate.getMonthValue() + " month in: " + month);
                    continue;
                }
                Log.d("calculate monthly earnings","adding event: " + event.getDate());
                eventsToCalculate.add(event);
            }
        }catch (NullPointerException e){
            Log.e("Null","No workday events in list");
        }
        return getEarnings(eventsToCalculate);
    }

    public int getYearlyEarnings(List<WorkdayEvent> workdayEvents){
        LocalDate now = LocalDate.now();
        List<WorkdayEvent> eventsToCalculate = new ArrayList<>();
        try {
            for (WorkdayEvent event : workdayEvents) {
                LocalDate eventDate = LocalDate.parse(event.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                // Hopp over event dersom den ikke er i nåværende år.
                if(eventDate.getYear()!= now.getYear() || eventDate.isAfter(now))
                    continue;
                eventsToCalculate.add(event);
            }
        }catch (NullPointerException e){
            Log.e("Null","No workday events in list");
        }
        return getEarnings(eventsToCalculate);
    }

    public int getPaycheckEarnings(List<WorkdayEvent> workdayEvents, Job selectedJob,int monthOffset) {
        totalHours = 0;
        if(selectedJob == null){
            return 0;
        }
        List<WorkdayEvent> eventsToCalculate = new ArrayList<>();
        LocalDate now = LocalDate.now();
        LocalDate checkDate = LocalDate.of(now.getYear(), now.getMonthValue(), selectedJob.getSalaryPeriodDate());
        LocalDate startDate;
        LocalDate endDate;
        // Setter hvilke månder neste lønningsperiode gjelder for.
        if(monthOffset > 0){
            if(now.isBefore(checkDate)){
                startDate = checkDate.minusMonths(1).plusMonths(monthOffset);
                endDate = checkDate.plusMonths(monthOffset);
            }else{
                startDate= checkDate.plusMonths(monthOffset);
                endDate = checkDate.plusMonths(1+monthOffset);
            }
        }else{
            if(now.isBefore(checkDate)){
                startDate = checkDate.minusMonths(1-monthOffset);
                endDate = checkDate.minusMonths(-monthOffset);
            }else{
                startDate= checkDate.minusMonths(-monthOffset);
                endDate = checkDate.plusMonths(1+monthOffset);
            }
        }
        startDateStr = formatDate(startDate);
        endDateStr = formatDate(endDate);
        try {

            for (WorkdayEvent event : workdayEvents) {
                LocalDate eventDate = LocalDate.parse(event.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));


                // Driter i events som ikke er for gjeldende jobb
                if(!event.getJob().getName().equals(selectedJob.getName()) ||
                        eventDate.isBefore(startDate) || eventDate.isAfter(endDate)){
                    continue;
                }
                Log.d("Calculating on date","From " + startDate.toString() + " to " + endDate.toString());
                totalHours+= event.getLength();
                eventsToCalculate.add(event);
            }
        }catch (NullPointerException e){
            Log.e("Null","No events");
        }
        return getEarnings(eventsToCalculate);
    }

    public int getNetEarningsWithPercentage(int earnings, float percentage){
        float netEarnings = (float) (earnings*(1-feriepengFaktor)*(1-(percentage/100)));
        return (int) netEarnings;
    }

    public int getYearlyNetEarningsWithTable(List<WorkdayEvent> eventList, String tableID) {
        LocalDate startDate = LocalDate.of(LocalDate.now().getYear(), 1, 1);
        LocalDate endDate = startDate.plusMonths(1);

        int netEarnings = 0;

            // Henter alle events for gjeldende månde
        for (int i = 0; i< 12;i++) {
            List<WorkdayEvent> eventsInMonth = new ArrayList<>();
            for (WorkdayEvent event : eventList) {
                LocalDate tempDate = LocalDate.parse(event.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));

                if (!tempDate.isAfter(LocalDate.now()) && tempDate.getYear() == LocalDate.now().getYear()
                        && tempDate.isBefore(endDate) && tempDate.isAfter(endDate.minusMonths(1))) {
                    Log.d("ADD EVENT: ", "DATE: " + tempDate.toString());
                    eventsInMonth.add(event);
                }
            }
            // Regner ut nettolønn for gjeldende måned
            netEarnings += getMonthlyNetEarningsWithTable(getEarnings(eventsInMonth), tableID);
            Log.d("NET EARNINGS", "" + netEarnings);
            // Hopper til neste måned
            startDate = startDate.plusMonths(1);
            endDate = endDate.plusMonths(1);
        }
        Log.d("PayCalculator", "NetEarnings yearly:" + netEarnings);
        return netEarnings;
    }

    public int getMonthlyNetEarningsWithTable(int earningsIn, String taxTableID){
        int basis = 0;
        int tax = 0;
        double earnings = earningsIn* (1-feriepengFaktor);
        BufferedReader reader = null;
        try{
            // Last inn csv fil
            reader = new BufferedReader( new InputStreamReader(mContext.getAssets().
                    open("tabellene2020/" + taxTableID +".csv"), "UTF-8"));
            String s;
            //Les fil linje etter linje
            while ((s = reader.readLine()) != null) {
                // CSV FORMAT:
                // 00000;00000
                // Grunnlag (5-siffer), ';' , Skatt (5-siffer)
                basis = Integer.parseInt(s.substring(0,5));
                if(basis > earnings)
                    break;
                tax = Integer.parseInt(s.substring(6,12));
            }
        }catch(IOException e){
            Log.e("Pay calculator","Failed to open .csv file");
        }finally {
            if(reader != null){
                try {
                    reader.close();
                }catch(IOException e){
                    Log.e("Pay calculator","Failed to close .csv file");
                }
            }
        }
        return (int)earnings-tax;
    }
}

```


Åpen kildekode jeg har brukt i applikasjonen:

 - https://github.com/SundeepK/CompactCalendarView (Kalenderkomponent)
 - https://github.com/jjoe64/GraphView (Komponent for lønningsgraf)
 - https://github.com/nostra13/Android-Universal-Image-Loader (Forlasting av bilder i event-listene)



 Laget av Marcus B Birkeland
