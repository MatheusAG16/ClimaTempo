import climaInformacoesStyle from './climaInformacoes.module.css'

function ClimaInformacoes () {
    return(
        <section className={climaInformacoesStyle.climaContainer}>
            <p className={climaInformacoesStyle.climaCidade}>
                São Paulo
            </p>
            <p className={climaInformacoesStyle.climaGraus}>
                21º
            </p>
            <p className={climaInformacoesStyle.climaTempo}>
                Ensolarado
            </p>
        </section>
    )
}

export default ClimaInformacoes;