import { Component } from "react"
import "./header.css"



class Header extends Component {

  render() {

    const {done,important} = this.props
    return (
    
      <div className="header"><h1> TODO LIST  </h1> 
       <span className="item-state">Done {done} Imposrtant {important}</span>
     
      </div>
      )
  }
}


  export default Header