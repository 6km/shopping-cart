import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentInputValue: "",
      items: [
        { name: 'Shirt', quantity: 2 },
        { name: 'Plane', quantity: 1 }
      ],
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    var { state } = this;

    return !Object.is(state, nextState);
  }

  increase(id) {
    let newState = Object.assign({}, this.state)
    newState.items[id].quantity += 1
    this.setState(newState)
  }

  decrease(id) {
    if (this.state.items[id].quantity > 0) {
      let newState = Object.assign({}, this.state)
      newState.items[id].quantity -= 1

      this.setState(newState)
    }
  }

  addItem(e) {
    e.preventDefault();

    const isProductNameEmpty = !this.state.currentInputValue.trim()

    if (isProductNameEmpty) return;

    const newState = Object.assign({}, this.state)

    newState.items.push({
      name: newState.currentInputValue,
      quantity: 1
    })

    this.setState(newState)
  }

  remove(id) {
    let newState = Object.assign({}, this.state)
    newState.items = newState.items.filter((_, i) => i !== id)
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <div id="Container">
          <div id="ContainerList">
            {this.state.items.length
              ? (
                this.state.items.map((item, idx) =>
                  <div className="ContainerListItem" key={idx}>
                    <h4 id="ItemTitle">{item.name}</h4>
                    <div className="buttons">
                      <button className="cursor_pointer" onMouseDown={() => this.increase(idx)}>+</button>
                      <span id="quantity" disabled>{item.quantity}</span>
                      <button className="cursor_pointer" onMouseDown={() => this.decrease(idx)} disabled={item.quantity <= 0}>-</button>
                      <button style={{ color: "crimson" }} className="cursor_pointer" onMouseDown={() => this.remove(idx)}>𝘅</button>
                    </div>
                  </div>
                )
              )
              : (
                <p>Your cart is empty</p>
              )
            }
          </div>

          <form id="InputContainer" onSubmit={(e) => this.addItem(e)}>
            <input type="text" placeholder="type here..." value={this.state.currentInputValue} onChange={(e) => this.setState({ currentInputValue: e.target.value })} />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
