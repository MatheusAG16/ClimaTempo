import pesquisaStyle from './barraDePesquisa.module.css'

function BarraDePesquisa() {

    ***REMOVED***

    const handlePesquisa = () => {
        console.log('pesquisa');
    }

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${'Sao Paulo'}&limit=${'1'}&appid=${ApiKey}`).then(response => {
        response.json().then(data => {
            console.log(data[0].lat)
            console.log(data[0].lon)
        })
    })

    return (
        <form className={pesquisaStyle.formPesquisa}>
            <input className={pesquisaStyle.inputPesquisa} type="text" name="inputPesquisa" id="inputPesquisa" placeholder="Digite a cidade"/>
            <button className={pesquisaStyle.btnPesquisa} type="submit" >B</button>
        </form>
    )
}

export default BarraDePesquisa;