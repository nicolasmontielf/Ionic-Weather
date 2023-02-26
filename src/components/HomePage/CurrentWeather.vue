<template>
    <div class="ion-text-center text-container">
        <IonText>
            <h1 style="position: relative">
                {{ roundTemperature(currentWeather.temperature, false) }} 
                <small style="font-size:55%; position: absolute; top:3px">°C</small>
            </h1>
        </IonText>
        <p>
            {{ WeatherForecastService.getWeatherCodeDescription(currentWeather.weathercode) }}
        </p>
        <IonChip>
            <small>{{ timezone.replace('_', '') }}</small>
        </IonChip>
    </div>
</template>

<script setup lang="ts">
    import { IonText, IonChip } from "@ionic/vue";
    import { CurrentWeather } from '@/types/weather'
    import WeatherForecastService from "@/services/WeatherForecast";
    import { roundTemperature } from '@/helpers';

    defineProps<{
        currentWeather: CurrentWeather,
        timezone: string
    }>();

</script>

<style scoped>
.text-container {
    margin-top: 3rem;
}
</style>