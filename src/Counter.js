import React from "react"

class Counter extends React.Component {

  state = {
    count: 0
  }

  countAdd = () => {
    this.setState({ count: this.state.count + 1 })
  }

  countRemove = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {

    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={this.countAdd}>Add</button>
        <button onClick={this.countRemove}>Remove</button>
      </div>
    )

  }
}

export default Counter
