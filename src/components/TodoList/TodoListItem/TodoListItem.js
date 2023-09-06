import { Component } from "react"
import "./todo-list-item.css"
import { FaPenToSquare } from "react-icons/fa6"
import { FaTrash, FaInfo, FaCheck } from 'react-icons/fa6'

class TodoListItem extends Component {

state = {
    isDone: false,
    isImportant: this.props.important,
    isEdit: false,
    newText: this.props.text
}



onDone = () => {
    this.setState ({
        isDone: !this.state.isDone
    })
}
onImportant = () => {
        this.setState({
            isImportant: !this.state.isImportant
        });
        }
onDeletebtn = ()=>{
    this.props.onDeleteItem(this.props.uniqueId)
}        

onEditButton = ()=>{
this.setState({
    isEdit: !this.state.isEdit
})
}

onInput = (event) => {
    this.setState({
      newText: event.target.value, 
    });
  };


render() {
const {isDone,isImportant, isEdit} = this.state

    const textStyle = {
        textDecoration: isDone ? "red" : "black",
        color: isDone ? "#aaa" : isImportant ? "red":"black",
        fontWeight: isDone ? "normal": isImportant ?"bold":"normal"
    }

    return (<li className="list-item" > 

   {isEdit ? (

  <input type="text" value={this.state.newText} onChange={this.onInput}/>

) : (

  <span className="item-test" style={textStyle} onClick={this.onDone}>
    {this.state.newText}
  </span>
  
)}
        <span className="item-btns">
             <button className="item-btn-edit" onClick={this.onEditButton}> <FaPenToSquare/> </button>
            <button className="item-btn-done" onClick={this.onDone}><FaCheck /></button>
            <button className="item-btn-important" onClick={this.onImportant}><FaInfo /></button>
            <button className="item-btn-remove"onClick={this.onDeletebtn}><FaTrash /> </button>
            
        </span>
    </li>
    )
}
}

export default TodoListItem