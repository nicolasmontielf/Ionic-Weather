export interface CurrentWeather {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
}

export type DailyTime = string[]

export type Temperature2M = number[]

export type SunInformation = number[]

export type WindSpeed = number[]

export type WindDirection = number[]

export interface DailyInformation {
    time: DailyTime
    temperature_2m_max: Temperature2M
    temperature_2m_min: Temperature2M
    sunrise: SunInformation
    sunset: SunInformation
    weathercode: number
    windspeed_10m_max: WindSpeed
    windspeed_10m_min: WindSpeed
    winddirection_10m_dominant: WindDirection
}

export interface BaseWeather {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
}

export interface Weather extends BaseWeather {
    current_weather: CurrentWeather
    daily: DailyInformation
    daily_units: {
        [key: string]: string
    }
}