import climaInformacoesStyle from './climaInformacoes.module.css'

function ClimaInformacoes ({ data, cidadeFinal }) {

    const cidadeCapitalizada = (cidade) => {
        return cidade.charAt(0).toUpperCase() + cidade.slice(1)
    }

    return(
        <section className={climaInformacoesStyle.climaContainer}>
            <p className={climaInformacoesStyle.climaCidade}>
                {cidadeCapitalizada(cidadeFinal)}
            </p>
            <p className={climaInformacoesStyle.climaGraus}>
                {data.main.temp}
            </p>
            <p className={climaInformacoesStyle.climaTempo}>
                {data.weather[0].description}
            </p>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon" />
        </section>
    )
}

export default ClimaInformacoes;