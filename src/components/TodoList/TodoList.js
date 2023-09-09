import { Component } from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import "./todo-list.css"


class TodoList extends Component {

  render() {
    const { items } = this.props

    const data = items.map(({ text, important, id }) => {
      return <TodoListItem 
      text={text} 
      important={important} 
      uniqueId={id} key={id}
       onDeleteItem={this.props.onDeleteItem}
       onDone={this.props.onDone}
       isDone={this.props.isDone} />
    })
    return (
      <ul className="todoList">
        {data}
      </ul>
    );
  }
}

export default TodoList