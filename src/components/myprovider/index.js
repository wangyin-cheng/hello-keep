import React, { Component, createContext } from 'react'
let context = createContext();
let { Provider, Consumer } = context;

class MyProvider extends Component {
  render() {
    return (
      <Provider value={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}
export {context,MyProvider,Consumer}