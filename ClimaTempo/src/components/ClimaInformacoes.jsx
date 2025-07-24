import climaInformacoesStyle from './climaInformacoes.module.css'
import {getWeatherIcon} from '../utils/getWeatherIcon'
import locationIcon from '../assets/location.png'
import humidityIcon from '../assets/humidity.png'

function ClimaInformacoes ({ data, cidadeFinal }) {

    //Recebe uma String e deixa a primeira letra em Maiusculo
    const stringCapitalizada = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    //Salva o código do ícone recebido pela API e manda para a função getWeatherIcon que retorna o SRC da imagem correspondente
    const iconCode = data.weather[0].icon;
    const iconSrc = getWeatherIcon(iconCode)

    return(
        <section className={climaInformacoesStyle.climaContainer}>

            <img src={iconSrc} alt="Weather Icon"/>
            <div className={climaInformacoesStyle.containerInfo}>
                <p className={climaInformacoesStyle.climaCidade}>
                    {stringCapitalizada(cidadeFinal)}
                    <img src={locationIcon} alt="Location Icon"/>
                </p>
                <p className={climaInformacoesStyle.climaTemp}>
                    {`${(data.main.temp).toFixed(0)}°C`}
                </p>
                <p className={climaInformacoesStyle.climaTempo}>
                    {stringCapitalizada(data.weather[0].description)}
                </p>
                <p className={climaInformacoesStyle.climaHumidity}>
                    <img src={humidityIcon} alt="Humidity Icon"/>
                    {`${data.main.humidity}%`}
                </p>
            </div>
            
            
        </section>
    )
}

export default ClimaInformacoes;