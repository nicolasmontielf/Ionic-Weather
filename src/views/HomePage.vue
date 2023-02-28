<template>
    <IonPage>
        <IonContent :fullscreen="true">
            <IonRefresher slot="fixed" @ionRefresh="handleRefresh">
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>

            <IonRow v-if="weather.current_weather">
                <IonCol>
                    <CurrentWeather
                        :current-weather="weather?.current_weather"
                        :timezone="weather?.timezone"
                    />
                </IonCol>
            </IonRow>

            <IonRow v-if="weather.daily">
                <IonCol>
                    <WeatherForecast :daily="weather.daily" />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol size="4">
                    <IonRow>
                        <IonCol size="12" v-if="weather.current_weather">
                            <WindInformation
                                :speed="weather.current_weather.windspeed"
                                :direction="weather.current_weather.winddirection"
                            />
                        </IonCol>

                        <IonCol size="12" v-if="weather.daily">
                            <SunInformation
                                :sunrise="weather.daily.sunrise[0]"
                                :sunset="weather.daily.sunset[0]"
                            />
                        </IonCol>
                    </IonRow>
                </IonCol>

                <IonCol size="8" v-if="weather.hourly">
                   <OtherInformations :data="weather.hourly" />
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
    import { IonCol, IonRow, IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue'

    import WeatherForecastService from "@/services/WeatherForecast";
    import { reactive, computed, onMounted } from "vue";
    import type { Weather } from '@/types/weather'

    const weatherService = reactive(new WeatherForecastService())
    const weather = computed<Weather>(() => weatherService.getWeather())

    onMounted(async () => {
        await weatherService.loadWeatherInfo()
    })

    async function handleRefresh(event: CustomEvent) {
        await weatherService.loadWeatherInfo();
        (event.target as any).complete();
    }
</script>
