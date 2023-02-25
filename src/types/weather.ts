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
}

export const WMO = {
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