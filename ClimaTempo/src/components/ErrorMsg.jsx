import style from './errorMsg.module.css'

function ErrorMsg({erro, onClose}) {

    const handleClick = () => {
        onClose();
    }

    return (
        <div className={style.error}>
            {erro}
            <button onClick={handleClick}>Fechar</button>
        </div>
    )
}

export default ErrorMsg;