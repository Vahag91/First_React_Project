import TodoListItem from "./TodoListItem";
const TodoList = () =>{

  const items = [
    {text: "Learn JS", important: true},
    {text: "Drink Coffee", important: true},
    {text: "Learn React", important: false},
    {text: "Learn TypeScript", important: true},
  ]


  const data = items.map(({text,important})=>{
    return <TodoList text = {text} important = {important} />
  })
    return (
      <ul>
     {data}
      </ul>
    );
  }

  export default TodoList