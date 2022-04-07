import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentInputValue: "",
      items: [
        { name: 'Product 1', quantity: 4 },
        { name: 'Product 2', quantity: 7 }
      ],
    }
  }

  add(id) {
    this.state.items[id].quantity += 1
    this.setState(this.state)
  }
  remove(id) {
    if (this.state.items[id].quantity > 0) {
      this.state.items[id].quantity -= 1
    }
    this.setState(this.state)
  }

  addItem(e) {
    e.preventDefault();

    if (!this.state.currentInputValue.trim()) return;

    this.state.items.push({
      name: this.state.currentInputValue,
      quantity: 1
    })

    this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <div id="Container">
          <div id="ContainerList">
            {
              this.state.items.map((item, idx) =>
                <div className="ContainerListItem">
                  <h4 id="ItemTitle">{item.name}</h4>
                  <div className="buttons">
                    <button className="cursor_pointer" onMouseDown={() => this.add(idx)}>+</button>
                    <span id="quantity" disabled>{item.quantity}</span>
                    <button className="cursor_pointer" onMouseDown={() => this.remove(idx)} disabled={item.quantity <= 0}>-</button>
                  </div>
                </div>
              )
            }

            <form id="InputContainer" onSubmit={(e) => this.addItem(e)}>
              <input type="text" value={this.state.currentInputValue} onChange={(e) => this.setState({ currentInputValue: e.target.value })} />
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
