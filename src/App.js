import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id:0, name: 'Product 1', quantity: 4 },
        { id:1, name: 'Product 2', quantity: 7 }
      ]
    }
  }

  add = (id) => {
    this.state.items[id].quantity += 1
    this.setState(this.state)
  }
  remove = (id) => {
    if (this.state.items[id].quantity > 0) {
      this.state.items[id].quantity -= 1
    }
    this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <div id="Container">
          <div id="ContainerList">
            {
              this.state.items.map(item => 
                <div className="ContainerListItem">
                  {item.name}
                  <button className="cursor_pointer" onClick={() => this.add(item.id)}>+</button>
                  <button style={item.quantity <= 0 ? {background:'orange'}: {}} disabled>{item.quantity>0 ? item.quantity : 'Zero'}</button>
                  <button className="cursor_pointer" onClick={() => this.remove(item.id)}>-</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
