import "./button.css"


const Button = ({text, color = "red"}) => { 

    return (
        <button style={{color}}>{text}</button>
    )
}

export default Button