import React, { Component } from 'react'

class Seasons extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.name}</h2>
        <p>Progress {this.props.data.progress}/{this.props.data.max_episodes}</p>
      </div>
    )
  }
}
export default Seasons;