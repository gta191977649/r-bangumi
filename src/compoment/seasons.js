import React, { Component } from 'react'

class Seasons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'NONE',
    }
    this.toogleEditMode = this.toogleEditMode.bind(this)
  }
  toogleEditMode() {
    this.setState({
        mode: this.state.mode === 'EDIT' ? 'NONE' : 'EDIT'
    })
  }
  render() {
    const season = <div className="season-wrapper">
      <h2>季度: {this.props.data.name}</h2>
        <p>进度 {this.props.data.progress}/{this.props.data.max_episodes}</p>
    </div>
    const editSeason = <div className="season-wrapper">
      <label>Season name</label>
      <input name="name" type="text" value={this.props.data.name}/>
      <label>Progress</label>
        <p><input name="progress" type="text" value={this.props.data.progress}/>/<input name="max_episodes" type="text" value={this.props.data.max_episodes}/></p>
    </div>
    return (
      <div className="season">
      <div className="tool-tip" style={{float:'right'}}><a href="#" onClick={this.toogleEditMode}>编辑</a>|<a href="#">消除</a></div>
        {this.state.mode === 'EDIT' ? editSeason : season}
      </div>
    )
  }
}
export default Seasons;