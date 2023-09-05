import { Component } from 'react';

import './add-item.css'


class AddItem extends Component {


  state = {
    inputValue: ""
  }

onInputChange = (event)=>{
  this.setState({
    inputValue: event.target.value
  })
}

onBtnClick = () =>{
this.props.onAddItem(this.state.inputValue);
this.setState({inputValue: ""})
}
  render() {
    return (
      <div className='additem'>
        <div>{this.state.inputValue}</div>
     <input type="text" value={this.state.inputValue} placeholder="Item text..." onChange={this.onInputChange}/>
        <button onClick={this.onBtnClick}>Add item</button>
      </div>
    )
  }
}


// const AddItem = () => {
//     
//   }

export default AddItem;