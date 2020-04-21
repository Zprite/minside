# Bluetooth-kontrollert LED-display

<video controls>  
	<source src="https://i.imgur.com/WYkuM5T.mp4" type="video/mp4">  
</video>

Etter å ha puslet med LED-matriser i mitt tidligere prosjekt der jeg laget en klokke ved hjelp av en Arduino og fire LED-matrise-moduler, bestemte jeg meg for å lage et større display med Bluetooth kontroll. Displayet består av 10 8x8 LED-moduler med MAX7219 driver-ICer. Disse er arrangert i en 5x2 konfigurasjon, og da blir oppløsningen på displayet totalt 40x16 piksler. 

Displayet får strøm via Arduino-enheten via USB. Dette gjør at displayet enkelt kan drives av PC- og andre mobile enheter, eller batteribanker og vanlige mobilladere.

I og med at jeg trengte å lage en Android-app for å kontrollere displayet, måtte jeg lære meg Android Studio og grunnlegende Java. Appen som følger med prosjektet er min første Android-app. Før dette prosjektet hadde jeg for det meste gjort all koding i C og C++. 

Koden til både Arduino og Android kan du hente på min Github: 

https://github.com/Zprite/BluetoothMatrix



## Oppkobling

### Utstyrsliste

 - Arduino Nano
 - HC-05 Bluetooth-modul
 - 10x (8x8) LED-moduler med MAX7219 og mulighet for seriekobling
 - 1k Ω resistor + 2k Ω resistor
 - 2x (9cm*15cm) oppkoblingsbrett
 - Ledninger og loddetinn

![Frontside](https://i.imgur.com/lZ6SUVW.jpg)På forsiden ligger HC-05 modulen lengst til venstre, rett ved siden av Arduinoen. Videre har vi selve displayet som er seriekoblet takket være modulene.
![Bakside av kretskort](https://i.imgur.com/PNOvnMN.jpg) På baksiden ligger alle kabelforbindelsene. Modulene er koblet i serie og ender til slutt opp i digitalpins på Arduinoen. Dette kan gjøres takket være I2C grensesnittet på modulene. Derfor trengs kun 3 digitalpins, +5v og jord. 
![Oppkoblingsanvisning av bluetooth-modul](https://i.stack.imgur.com/H7LNg.jpg)

Videre er Arduino koblet til bluetooth-modulen. Fordi Arduinoen sender ut signaler på 4.2v via TX-pinnen, og HC-05 modulen kun aksepterer signaler på 3.3v som et logisk "1" , trenger vi en spenningsdeler mellom Arduino og bluetooth-modulen. Dette kan gjøres med to resistorer:


## Android app
<div class="imageContainer">
<img src="https://i.imgur.com/voQrMZw.png" alt="Bilde av android app" height="700px"/>
</div>
For å styre displayet har jeg installert en HC-05 Bluetooth modul som komuniserer med Arduinoen som er på brettet. Jeg har laget en Android app som kobler seg opp til HC-05 modulen, og lar brukeren sende strenger til displayet. I tillegg kan brukeren justere lysstyrken på displayet, og hvor fort teksten går. Denne informasjonen blir ført fra mobilenheten til HC-05 enheten over BT, og blir så lest av Arduinoen som behandler signalene. I likhet med klokkeprosjektet mitt, bruker jeg her MD_MAX72xx og MD_Parola bibliotekene for å kontrollere displayet. 

Appen kan lastes ned her: 
https://github.com/Zprite/BluetoothMatrix/tree/master/Android/apk

## Kode

Takket være bibliotekene nevnt over, er Arduino-koden svært simpel. Alt jeg trengte å gjøre var å ta imot informasjonen fra HC-05 modulen, og behandle dette for å kontrollere displayet: 
```c
#include <Arduino.h>
#include <SoftwareSerial.h>
#include <MD_Parola.h>
#include <MD_MAX72xx.h>
#include <SPI.h>
#include "Font_Data.h"

SoftwareSerial BTserial(4, 3); // RX | TX

#define _SS_MAX_RX_BUFF 256 // RX buffer size
#define CLK_PIN   13
#define DATA_PIN  11
#define CS_PIN    10

#define HARDWARE_TYPE MD_MAX72XX::FC16_HW
#define MAX_DEVICES 10
#define MAX_ZONES  2
#define ZONE_SIZE (MAX_DEVICES/MAX_ZONES)

int SCROLL_SPEED = 30;
#define SPEED_TIME  20
#define PAUSE_TIME  0

MD_Parola P = MD_Parola(HARDWARE_TYPE, CS_PIN, MAX_DEVICES);
String input="Heihei";

void display_text(char *input_string){        
	  P.setFont(0, BigFontLower);
	  P.setFont(1, BigFontUpper);
	  P.displayZoneText(1, input_string, PA_LEFT, SCROLL_SPEED, 0, PA_SCROLL_LEFT, PA_SCROLL_LEFT);
	  P.displayZoneText(0, input_string, PA_RIGHT, SCROLL_SPEED, 0, PA_SCROLL_LEFT, PA_SCROLL_LEFT);
	  uint8_t  curZone = 1;
	  while (!P.getZoneStatus (curZone))
	    P.displayAnimate(); // Refresh display
}

void setup() {
	pinMode(LED_BUILTIN, OUTPUT);
	Serial.begin(9600); // Default communication rate of the Bluetooth module
	BTserial.begin(9600);
	// Set up display
	P.begin(MAX_ZONES);
	P.setInvert(false);
	for (uint8_t i=0; i<MAX_ZONES; i++){ // Set Zones for display
    	P.setZone(i, ZONE_SIZE*i, (ZONE_SIZE*(i+1))-1);
	}
	P.setIntensity(1);
}

void loop() {
	while(BTserial.available()){
	    	input = BTserial.readString();
	}
	  char buff[256];
	  input.toCharArray(buff,256);
	  static char message[256];
	  char command[64] = "\0";
	  if(strncmp(buff, "INTENSITY",strlen("INTENSITY"))== 0 || strncmp(buff, "SPEED",strlen("SPEED"))== 0){
		  strcpy(command, buff);
	  } else {
		  strcpy (message, buff);
	  }

	  if (strncmp(command, "INTENSITY",strlen("INTENSITY"))== 0){
		  int intensity = (command[strlen("INTENSITY")] - '0' )*2;

		  P.setIntensity(intensity);
	  } else if (strncmp(command, "SPEED", strlen("SPEED"))==0){
		  SCROLL_SPEED = (command[strlen("SPEED")] - '0') * 10;
  }
  Serial.println("command=" );
  Serial.println(command);
  Serial.println("Message=");
  Serial.println(message);
  display_text(message);
}
```
Kildekoden for appen finner du på min Github:
https://github.com/Zprite/BluetoothMatrix/tree/master/Android/DisplayControll/app/src/main/java/com/gmail/birkelandmarcus

## Åpen kildekode brukt i prosjektet:

- https://github.com/MajicDesigns/MD_parola
- https://github.com/MajicDesigns/MD_MAX72xx
