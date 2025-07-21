// Script que recebe o código do icone da API OpenWeather e retorna com uma imagem png personalizada de acordo.

import defaultIcon from '../assets/mist.png';
import icon01d from '../assets/sun.png';
import icon02d from '../assets/fewClouds.png'
import icon03d from '../assets/scatteredClouds.png'
import icon04d from '../assets/brokenClouds.png'
import icon09d from '../assets/showerRain.png'
import icon10d from '../assets/rain.png'
import icon11d from '../assets/thunderstorm.png'
import icon13d from '../assets/snow.png'
import icon50d from '../assets/mist.png'

const iconMap = {
    '01d': icon01d,
    '02d': icon02d,
    '03d': icon03d,
    '04d': icon04d,
    '09d': icon09d,
    '10d': icon10d,
    '11d': icon11d,
    '13d': icon13d,
    '50d': icon50d,
    // Parte noturna (mesmos icones por enquanto)
    '01n': icon01d,
    '02n': icon02d,
    '03n': icon03d,
    '04n': icon04d,
    '09n': icon09d,
    '10n': icon10d,
    '11n': icon11d,
    '13n': icon13d,
    '50n': icon50d,
}

export const getWeatherIcon = (code) => {
    return iconMap[code] || defaultIcon;
}