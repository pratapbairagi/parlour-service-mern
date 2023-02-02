

const Button = ({css,functions,state, type, text }) =>{
    console.log()
    
    return(
        <button className={`btn`} onClick={functions} type={type} style={css}>{text}</button>
    )
}

export default Button