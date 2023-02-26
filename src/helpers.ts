export function roundTemperature(temperature: number | string, withSymbol = false): string {
    const symbol = withSymbol ? '°C' : ''
    return `${Math.round(parseFloat(String(temperature)))}${symbol}`
}