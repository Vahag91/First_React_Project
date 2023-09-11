import React, { Component } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css"




class App extends Component {

  state = {
    items: [
      { text: "Learn JS", important: true, id: 1 },
      { text: "Drink Coffee", important: true, id: 2 },
      { text: "Learn React", important: false, id: 3 },
      { text: "Learn TypeScript", important: false, id: 4 },
      { text: "Learn NodeJs", important: true, id: 5 }
    ],
    isDone: false,
    storedItems: []
  }

  componentDidMount = () => {
    this.setState(() => {
      const copy = [...this.state.items];
      return { storedItems: copy };
    })
  }
  

  handleSearch = (text) => {
  
  console.log(this.state.storedItems);

    const searchingKeys = text.target.value.toLowerCase()

    if (searchingKeys === "") {
      this.setState({
        items: [...this.state.storedItems]
      })
    } else {

      const filtered = this.state.items.filter((e) => {
        return e.text.toLowerCase().includes(searchingKeys)
      })
      this.setState({
        items: filtered
      })

    }

  }

  onDone = () => {
    this.setState({
      isDone: !this.state.isDone
    })
  }
  onAddItem = (text) => {
    const newItem = {
      text,
      important: false,
      id: this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1
    };
    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }

  onDeleteItem = (id) => {
    this.setState(({ items }) => {

      const idx = items.findIndex((el) => el.id === id)

      return {
        items:
          [...items.slice(0, idx),
          ...items.slice(idx + 1)]
      }
    })
  }


  render() {

    return (
      <div className="app" copy={this.makingCopy}>
       
        <Header done={8} important={23} />
        <Search handleSearch={this.handleSearch} />
        <TodoList items={this.state.items} isDone={this.state.isDone} onDeleteItem={this.onDeleteItem} onDone={this.onDone} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
