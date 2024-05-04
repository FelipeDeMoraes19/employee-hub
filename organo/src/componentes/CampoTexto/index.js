import './CampoTexto.css'

const CampoTexto = (props) =>{

        const placeholderModificada = `${props.placeholder}...` 
    return (
        <div className='campo-texto'>
            <labe>
                {props.label}
                </labe>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto