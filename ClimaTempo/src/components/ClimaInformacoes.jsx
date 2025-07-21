import climaInformacoesStyle from './climaInformacoes.module.css'
import {getWeatherIcon} from '../utils/getWeatherIcon'

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
            <p className={climaInformacoesStyle.climaCidade}>
                {stringCapitalizada(cidadeFinal)}
            </p>
            <p className={climaInformacoesStyle.climaGraus}>
                {data.main.temp}
            </p>
            <p className={climaInformacoesStyle.climaTempo}>
                {stringCapitalizada(data.weather[0].description)}
            </p>
            <img src={iconSrc} alt="Weather Icon" />
        </section>
    )
}

export default ClimaInformacoes;