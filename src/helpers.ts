import { getDay, getHours, format, add } from 'date-fns'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function roundTemperature(temperature: number | string, withSymbol = false): string {
    const symbol = withSymbol ? '°C' : ''
    return `${Math.round(parseFloat(String(temperature)))}${symbol}`
}

export function getDayName(date?: string) {
    const currentDate = date ? new Date(date + 'T00:00:00') : new Date()
    return DAYS[getDay(currentDate)]
}

export function getCurrentHourIndex() {
    const currentDate = new Date()
    return getHours(currentDate)
}

export function getHourFromDate(date: string) {
    return format(new Date(date), 'HH:mm')
}

export function getCurrentDateAndNext4Days() {
    const currentDate = new Date()

    return [
        format(currentDate, 'yyyy-MM-dd'),
        format(add(currentDate, { days: 4 }), 'yyyy-MM-dd')
    ]
}