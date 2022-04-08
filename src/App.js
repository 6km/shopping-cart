import './App.css';
import React, { Component } from 'react';

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

  shouldComponentUpdate(_nextProps, nextState) {
    var { state } = this;

    return !Object.is(state, nextState);
  }

  add(id) {
    let newState = Object.assign({}, this.state)
    newState.items[id].quantity += 1
    this.setState(newState)
  }
  remove(id) {
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

    let newState = Object.assign({}, this.state)

    newState.items.push({
      name: newState.currentInputValue,
      quantity: 1
    })

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <div id="Container">
          <div id="ContainerList">
            {
              this.state.items.map((item, idx) =>
                <div className="ContainerListItem" key={idx}>
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
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
