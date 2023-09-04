import { Component } from "react";
import "./error-message.css"


class ErrorMessage extends Component {


    render (){
        const {message} = this.props

        return <div className="error-message">
            {message}
        </div>
    }
}

export default ErrorMessage