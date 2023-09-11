import { Component } from "react"
import "./todo-list-item.css"
import { FaPenToSquare } from "react-icons/fa6"
import { FaTrash, FaInfo, FaCheck } from 'react-icons/fa6'
import { validateInput } from "../../../utils/validator"

class TodoListItem extends Component {

    state = {

        isImportant: this.props.important,
        isEdit: false,
        newText: this.props.text,
        isError: false
    }





    onImportant = () => {
        this.setState({
            isImportant: !this.state.isImportant
        });
    }
    onDeletebtn = () => {
        this.props.onDeleteItem(this.props.uniqueId)
    }

    onEditButton = () => {
        this.setState(({ isEdit, newText }) => {
            if (isEdit && !validateInput(newText)) {
                console.log("error");
                return {
                    isError: true
                }
            }
            return {
                isEdit: !isEdit,
                isError: false
            }
        })
    }

    onInput = (event) => {


        this.setState({
            newText: event.target.value,
        });
    };


    render() {
        const { isImportant, isEdit, isError } = this.state

        const textStyle = {
            textDecoration: this.props.isDone ? "red" : "black",
            color: this.props.isDone ? "#aaa" : isImportant ? "red" : "black",
            fontWeight: this.props.isDone ? "normal" : isImportant ? "bold" : "normal"
        }

        const inputStyle = {
            borderColor: isError ? "red" : "#ccc"
        }
        return (<li className="list-item" >

            {isEdit ? (
                <div className="item-input-wrapper">
                    <input type="text"
                        value={this.state.newText}
                        style={inputStyle}
                        onChange={this.onInput} />

                    {isError ? <span className="input-error-message">Input text is requires</span> : null
                    }
                </div>
            ) : (

                <span className="item-test" style={textStyle} onClick={this.props.onDone}>
                    {this.state.newText}
                </span>

            )}
            <span className="item-btns">
                <button className="item-btn-edit" onClick={this.onEditButton}> <FaPenToSquare /> </button>
                <button className="item-btn-done" onClick={this.props.onDone}><FaCheck /></button>
                <button className="item-btn-important" onClick={this.onImportant}><FaInfo /></button>
                <button className="item-btn-remove" onClick={this.onDeletebtn}><FaTrash /> </button>

            </span>
        </li>
        )
    }
}

export default TodoListItem