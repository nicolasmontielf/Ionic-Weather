<template>
    <IonPage>
        <IonContent :fullscreen="true">
            <IonRow>
                <IonCol>
                    <CurrentWeather />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <WeatherForecast />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol size="4">
                    <IonRow>
                        <IonCol size="12">
                            <WindInformation />
                        </IonCol>

                        <IonCol size="12">
                            <SunInformation />
                        </IonCol>
                    </IonRow>
                </IonCol>

                <IonCol size="8">
                   <OtherInformations />
                </IonCol>
            </IonRow>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
import CurrentWeather from "@/components/HomePage/CurrentWeather.vue";
import OtherInformations from "@/components/HomePage/OtherInformations.vue";
import SunInformation from "@/components/HomePage/SunInformation.vue";
import WeatherForecast from "@/components/HomePage/WeatherForecast.vue";
import WindInformation from "@/components/HomePage/WindInformation.vue";
import { IonCol, IonRow, IonContent, IonPage } from '@ionic/vue'


</script>
