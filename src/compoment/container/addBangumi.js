import React, { Component } from 'react'

export default class AddBangumi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:undefined,
            seasonname:undefined,
            max_episodes:undefined,
        }
        this.add = this.add.bind(this)
    }
    add() {
        console.log("add click")
        let newBangumi =  {
          name: this.state.name,
          seasons: [
            { name:this.state.seasonname,max_episodes:this.state.max_episodes,progress:3}
          ]
        }
        this.props.addBangumi(newBangumi)
    }
    render() {
        return (
            <div>
                <h3>添加番剧</h3>
                <hr/>
                <label>番名:</label>
                <input value={this.state.name}/>  
                <label>季名:</label>
                <input value={this.state.seasonname} />  
                <label>集数:</label>
                <input type="number" value={this.state.max_episodes} />  
                <label>进度:</label>
                <input type="number" value={this.state.max_episodes} />  
                <input type="button" value="OK" onClick={this.add}/>
            </div>
        )
    }
}
