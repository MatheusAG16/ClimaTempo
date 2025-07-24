import pesquisaStyle from './barraDePesquisa.module.css'
import searchIcon from '../assets/search.png'

function BarraDePesquisa({cidade, onValueChange, onPesquisar}) {

    return (
        <form className={pesquisaStyle.formPesquisa} onSubmit={onPesquisar}>
            <input className={pesquisaStyle.inputPesquisa} 
                type="text" 
                name="inputPesquisa" 
                id="inputPesquisa" 
                placeholder="Digite a cidade" 
                value={cidade} 
                onChange={onValueChange}
            />

            <button className={pesquisaStyle.btnPesquisa} type="submit">
                <img src={searchIcon} alt="Search Icon"/>
            </button>
        </form>
    )
}

export default BarraDePesquisa;