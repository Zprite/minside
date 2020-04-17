
# Terminus - jobbkalender og lønnsoversikt

Dette er en Android applikasjon jeg laget for å gjøre det lettere å holde oversikt over arbeidstider og egen inntekt. Appen har deremed to hovedformål:

1. **Holde oversikt over arbeidsvakter for brukeren**
2. **Gjøre det mulig for brukeren å holde oversikt over egen inntekt**

**Last ned appen her: ** https://play.google.com/store/apps/details?id=com.birkeland.terminus

NB: Minimumskrav : Android  8.0 Oreo

## Kalender
<div class="imageContainer">
    <img src="https://lh3.googleusercontent.com/1__Zc2ym7Zgj68f8tzFQ5faG3u5f5Ubzd6C_FWvH0Srb7FP0ItFAb_OzRPozMKG5UPvCPykSABiH3SP4Ppdyr-OcoMzrq6-d_npcSyVUJSLsIjSuRMOAz7yJHHC8H8_mnVpYwpQ2mPEfogyKpw4A-xJhZ1zwP0RU9iY2dgx-7MgAZCzHPCMyxntp3LEcG6RFFPLqosIdmCLiNKwcc-b45G1xNatMVX0xFR1K6HJPzMP6oya0jdQyZk2LcpBfcEs7HoSZUdgnXCH-_h49a5xYfxcsaDTohPeyMEJaUPUghq2v4jGSuyab_D48LMxZhtz96oR0S-bDtKuBsPUrFpA4_P5Uz4l6MylnYbU2WGd0av8TIkvglQzInu5pGBIxGRStx_Wd00eNJdS7i2unEYhFOWvfo4J_-z_elvXwLEq2zwhgYFNAyG7m7GU7-D_VPSXw3YZ5xOSWIRGWZNqVZf4oaMsznI3ognySr5EK2_7BovSA_Ne9Els5NBzgcIcT4Tn3BTJxMoK7emA9SthNgSubu_FOmaa3Y3ChRLacntbQZJv5lKyreKAKsDZEc1h3_vEVFQOrODYK-_u3kpcnDznBuj2XMxbz_04XfMBe4hKgnSF3aRSosJlJRZcx6FHjlEgwvQbID0mSSC7rJ3mbAIRnkRt8TxnLSZGyzFyTvpiEafgiQBM9wgLJ5g=w663-h1326-no" alt="Kitten"
        title="Bilde av kalenderen" width="300" height="600" />
    <img src="https://lh3.googleusercontent.com/_PkgnfOXGorTZnNPErrFMs_cNT8PjMAXOFYFsFiJygTpaUVsiXvzyh1BSIVoIevckono3ykkOzaFkMV8tZ5Cy-zoBMjQ0ZW3cnKakgFeb7EphtwYov_ljz7cQEfTQg4hStxM16jVrG_p8LMDaYbViM5PKHywxR_32-Z_yD40hqxWb6F6vfVkWK0LfyeBL9NXy54oW-9X5UBkb6kai1GA9_OEydXyfcfiKUCZxT7oknqn2KZSkQHkZTgfT0YA1BXuymL0UQDMePMTs8imEFPxdeM1A7ZGOtL45HXrraQC0uTvQhzVI1kqdhEhu7REnGI_ZOmDFQVsSh3DhdPGieRq7MbnwsIlbhzAqMGgnFt2qBnomxzaZf9cMFNT4dna2TFsXvpiZNg1M-Oq6U62vkryN6DIMTFdcaQbSuZ0uUtl6uUJpBe6oyRlWX5IU8qLcR91Nd5nVqkdnpzQyLZ0yyq2sQPwR8xAi03zWsjzUsAnVTIP2RoHTwcG4kx1pWjRi_7u_hF_WjSFthUha3EFVpTuH_QCYT6ESMIa-p54jVcmkrAnzMf50k8P8XRHNsOMmI80_dDG8NVGjw5ERjH8IeI6hI_-DXYgxDBgkydWEb1j_rVvmaJoH8Lb01aygu4SI1QIYs01OBkl3IS5GPbUPJY67PBGB5J2jPVCKqkSrJO4q4tUgFr_VjhfKA=w543-h1086-no"
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
    <img src="https://lh3.googleusercontent.com/jt5z_Bqmvgb0Rwm4Fn6SD98m2V3EnFCkrDQlIt9u5LZwuNju3VbNn671ExkXryUTj_xKssjpNn2lI3felLSA-PVrlVUGB05EqeUZ3zCbNABRWQNVr2hjWwUH8rQ_8DvkAU-yf_cRGQF69qnT6DulgHV0I8kHug1Lp85HPV3jCa4tUuWmhII3xjVXu-sGhzF3MQPHbHQg_WlO55A6X1pzwCbR4bIOXqtZ_l6cIGsYzEWt4xJRr3f3ZHoCHr2dUFaf5h2hdpOvSrAlQzXC5h0pXvWW45_rZVIDnbVincHS2Lr42HVMPZdY_HEq5U0rVx78GcswNTkPpIfXrKCrRuW4iBUnu14t10roJn6eB3hcwitz2pLCKM5DlJnFVetqtO-3oXWHooBo8LxGbrKO7W_6X1fXYuiZ1Rm3gfwk9KdAlaLvcPtNPBoPNFa3VlfHkJEDQcP25k3kKqovoO5hCrNAVfI5yNEUirr8wJnbfaBklrBLtb0a0THGdorVbEyhZUUaFQY6LY4F3HhVOimRbYyOgHL0PUM4V-ChjXfT-OnIWVThbMKXSUa5pg-pSar9M-KBosKkeoLDMYNhPA5ZhyvPGiK1CSyw8XGqoN5LnunkQpy9H1HPv1zN8E2dwc8OdJ13_0wFR-Vf1D6bWdgiKzZ9nD2ZSbf5fbDFmHfTjVSSHOF0S75fD_9QTA=w543-h1086-no"
        title="Bilde av lønnsslipp" width="300" height="600"/>
    <img src="https://lh3.googleusercontent.com/9kKR30RTk0DYi2_yJi3UgbCQPJVVy1JO9Id0SIM0LwYwhtv8I3VXuYUcPVN0rfvEwSRSF3V0LfvGwMg77RQKCkicYn6MqzgdaJZdkel9diHrSVCnZ6y1r3UWx4IFRnJXPu7u6AxtABOUNy42ZRDXJGyATXi6JXwWM1zNMjbTGZPaTewO_0ByS2CK5UyhuEfLtJEgq2goq3tPxxHnT7M9m6VFKhXCTIFOKijxTzN0yxNr56fFBLHJ3yHR62BYoEyA0y3vSqi7FESC5t3i2NDDopKVwSPRWzAs6N2qFysyHUS4uQHqfe6a5YsMzziISwuWtI221xEWUcsRg14rzEWq3uQU3zCboeAa6rR09JZstT8k5SHShDm6GgBZe2NFX1xpWnDoWHXG2Fx86qrqc6WQKg9rjk5ApR5UcjINhMBeyedl4i_8k6XQla3HFayn4tmGeFTiaK9c--UDtTd020s_MLNnO3BiKQMUh1HmuhARcVLWh8zJbZxKunev2mN5rxa6KhM5kdHIlZnww7n5J25wyZpeHB8d6A_kcEqBwa9EtSZ7GJeLiGNGfuox7mcd7HCYvmqzoXvSIy7WgJPImbjJpI0bg8DJix8i1TDbfi21XwQiQBLELGJA58VAK1KkoxlQbfMvXfJ4FDjEskYqgz3wf-MIsibCtsGeFn677Ewwv_nZHJo9W2RJRg=w543-h1086-no"
        title="Bilde av lønnsslipp"width="300" height="600"/>
</div>

 Ut i fra dataene appen får fra brukeren via vakter som er satt opp, regner applikasjonen automatisk ut brutto og netto månedslønn for hver måned. Disse er basert på brukerdefinerte lønningsperioder, og dermed kan brukeren få et godt estimat på hva de får på lønnslippen. For å regne nettolønn angir brukeren skattemetode, enten det er tabelltrekk eller prosenttrekk. 
 
 Alle de norske skattetabellene er implementert i applikasjonen (2020). I lønnsoversikten er det også mulig å se en graf over årets bruttoinntekt fram til dags dato. Denne grafen gjelder på tvers av jobber og grafer fra start til slutt av hver måned. Altså viser grafen **IKKE** bruttolønn fra lønnsslipp til lønnsslipp.

## Teknisk
<div class="imageContainer">
    <img src="https://lh3.googleusercontent.com/VZ9oGJGKoZpkRgaZp2Z_FGQDsDvp-mKOpKBFBHVsb8O3G0jmHatqisgH68FPsUIueLHTy0ZD631zBkbf9A_IZ9hjAh6DfpfvkRJtlk7_YCTqzJlf-vZXpE0mWx0EFsRmD8Nl5WFwm0R802TUAN89-CGEOtaKlOgYGGpcnov7JsFWaFQJfejzm-VYVa58hrAMj1mOPqXlR2ZMvL7kAhzDTIXHrnrb2SwhY7_MubCRrevhA8w76f3jBpHflygSKeKLjhTRJ1-3dZhxpnYRQsqnO1Sf3gLQO74sxytOiTINeI1-PB2tx6DeXkKQZYA6KkQlqZjRsmduR0zwcX8kINcLaWwMxbuJxZnUAzJLPhAbrRAwnFnWFkG4HdLpPJpEZSWXnDUfHv7iq-ivRGJAgaCuUaqyWvD1kJqYo03SUVz7WDAeT26rhvlB8Bydu_3MoY-531qH0obVO9sDTevjEVWJOh69EoPR3eLfo2NmwX2s5A1KN48CVGh8hrqR86B7hcTkd-MaRzO1GqP5GSTAhZZYKJyOJWFypFe1QQ0fwkKCWbd9YvySLqGcGmvAXYSrQMnDAINthFtv0F-j1nKTEo4_P4-qx_-v1HpkitU8MAyYdywKCrO6JmvRaj-4RSuaFyUZVzZWNNH1tC29pcXCrGzGTNpQECg-DxsuTvS4axyvzZ4TQkhe1xsEzg=w958-h655-no" 
    title="Klasseflyt-diagram" width="800" height="600"/>
</div>

Applikasjonen baserer seg i all hovedsak på to lister med objekter:

 - Liste over alle jobber
 - Liste over alle vakter

Disse listene er lagret lokalt på enheten på JSON format, og blir brukt for administrering av vakter, jobber og i lønnskalkulatoren. 

<div class="imageContainer">
    <img src="https://lh3.googleusercontent.com/Ytp3ifuEUDgJOtFNAHLQpldqgh7q9IsexTas4p1652u1ewe1RP-zA0CjnGXhgG4lIwBHtMcUoWSeXwBmiFgHQRRpTokkzroIXedYUeRCrhBL5ZxRCo81JNigWASMoKhxDol7lCTfiGqemujGOHGp_rniDqRNhJpleuzDbfmWgiuyOTgzgYhkKy_MdGmhXiwJQfiRg4kvPQv91CIi0RPob_S2zuv2v9hDT-TgV0kBA0-z63lqCUwW46cqFDgd9pC-drgBWD7dcrFVDvh98BNiMq4WRnguDOULt0HpYZWuTwUTUGi0PK8jQ_SOGhoGHk5h40TB5n0BCkQmfDKsknCCERGi34zShA14rhtY5MFOVcgbI-6t8-VpdCb67SJrp5G_q8Xh0Jk4TE4wtryA_YsuJWreaQCkSI7H95cgII3Md_fcz-FK2-LtQaGIRtPlN3l3KwoXJHMAYtL7ijhYF9E8CHEKRl-W-P_3dQ3tJ4l7prV54HqqmEtlGf_ak1y3fv59zk_zhmpDHInSay85yD6XmhnCmFLEiohnw0houaNo3JflDTdNZSVPZE5iCkTppPo1PkZI6A30r-SKLgNEw2US82AzL_1sMQmZNrWbPBgxSVWexqqAq-EU45yaZ3AQq9vtWgyADWfyT4RdJPgNDgx2RBNXBqU4tvL2AmK1Zr2Opli-IHfpTJI3ng=w1363-h566-no"
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
