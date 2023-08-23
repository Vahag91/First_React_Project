import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Update from "./components/Update";






const App = ()=> {
  return (
    <div>
      <Header />
      <Update />
      <Search />
      <TodoList />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <App />)

