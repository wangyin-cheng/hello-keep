import React, { Component } from 'react'
import {Consumer,context} from '../myprovider'
export default class Three extends Component {
  static contextType = context
  componentDidMount() {
    console.log(this.context.getState().n);
  }
  render() {
    return (
      <div>
        {
          <Consumer>
            {
              (value) => {
                return <div>{value.getState().n}</div>
              }
            }
          </Consumer>
        }
      </div>
    )
  }
}
