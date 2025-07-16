import climaInformacoesStyle from './climaInformacoes.module.css'

function ClimaInformacoes ({ data, cidade }) {

    const temp = (data.main.temp - 273.15).toFixed(1)

    return(
        <section className={climaInformacoesStyle.climaContainer}>
            <p className={climaInformacoesStyle.climaCidade}>
                {cidade}
            </p>
            <p className={climaInformacoesStyle.climaGraus}>
                {temp}
            </p>
            <p className={climaInformacoesStyle.climaTempo}>
                {data.weather[0].description}
            </p>
        </section>
    )
}

export default ClimaInformacoes;