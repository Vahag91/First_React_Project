import { Component } from "react"
import "./search.css"



class Search extends Component {
  render() {
    return  (
      <div className="search">
        <input type="text"
         placeholder="Type text for search..."
         onChange={this.props.handleSearch} />
        <button className="search-btn-all" onClick={this.props.showingAll}>All</button>
        <button className="search-btn-done">Done</button>
        <button className="search-btn-important" onClick={this.props.showingImportant}>Important</button>
        </div>
      )
  }
}


  export default Search