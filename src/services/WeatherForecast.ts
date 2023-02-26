import { Weather, CurrentWeather, DailyInformation } from '@/types/weather'
import axios from 'axios'

const WMO = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle light intensity',
    53: 'Drizzle moderate intensity',
    55: 'Drizzle dense intensity',
    56: 'Freezing Drizzle: Light intensity',
    57: 'Freezing Drizzle: Dense intensity',
    61: 'Rain slight intensity',
    63: 'Rain moderate intensity',
    65: 'Rain heavy intensity',
    66: 'Freezing rain light intensity',
    67: 'Freezing rain heavy intensity',
    71: 'Snow fall slight intensity',
    73: 'Snow fall moderate intensity',
    75: 'Snow fall heavy intensity',
    77: 'Snow grains',
    80: 'Rain showers slight',
    81: 'Rain showers moderate',
    82: 'Rain showers violent',
    85: 'Snow showers slight',
    86: 'Snow showers heavy',
    95: 'Thunderstorm slight or moderate',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
}

export default class WeatherForecast {
    weather: Weather = {} as Weather;

    async loadWeatherInfo(): Promise<void> {
        const { data } = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-25.31&longitude=-57.53&timezone=America/Sao_Paulo&current_weather=true&start_date=2023-02-26&end_date=2023-03-02&daily=temperature_2m_max,temperature_2m_min&daily=sunrise,sunset&daily=weathercode&daily=windspeed_10m_max,windspeed_10m_min&daily=winddirection_10m_dominant');

        this.weather = data;
    }

    getWeather(): Weather {
        return this.weather;
    }

    static getWeatherCodeDescription(code: number): string {
        return WMO[code as keyof typeof WMO];
    }
}