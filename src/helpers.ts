import { getDay, getHours } from 'date-fns'

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

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