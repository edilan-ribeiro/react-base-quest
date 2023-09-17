import './button.css'

const Button = ({label}) => {
    const message = () => {
        alert(`A label desse botão é ${label}`)
    }

    return (

        <button className="btn" onClick={message}>
            {label}
        </button>
        
    )
}

export default Button