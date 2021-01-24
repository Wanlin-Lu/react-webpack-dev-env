import React, { Component } from 'react'

export default class extends Component {
  state = {
    value: '',
  }

  /*当输入的时候直接报错*/
  handleChange = (e) => {
    throw new Error('测试')
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
