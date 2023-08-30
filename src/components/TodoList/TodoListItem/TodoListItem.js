import "./todo-list-item.css"

const TodoListItem = ({text, important})=>{

    const style = {
        color: important ? "red" : "black"
    }

    return <li style={style}> {text}</li>
}

export default TodoListItem