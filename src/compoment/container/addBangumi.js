import React, { Component } from 'react'

export default class AddBangumi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            seasonname:'',
            max_episodes: 0,
            progress: 0,
        }
        this.add = this.add.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
    add() {
        console.log("add click")
        let newBangumi =  {
            name: this.state.name,
            seasons: [
                { name:this.state.seasonname,max_episodes:this.state.max_episodes,progress:this.state.progress}
            ]
        }
        this.props.addBangumi(newBangumi)
    }
    //react 我最不喜欢的地方，没有vue的双向绑定
    onInputChange(event) {
        //console.log(`name changed is ${event.target.name}`);
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        return (
            <div>
                <h3>添加番剧</h3>
                <hr/>
                <label>番名:</label>
                <input name="name" value={this.state.name} onChange={this.onInputChange}/>  
                <label>季名:</label>
                <input name="seasonname" value={this.state.seasonname} onChange={this.onInputChange}/>  
                <label>集数:</label>
                <input name="max_episodes" type="number" value={this.state.max_episodes} onChange={this.onInputChange}/>  
                <label>进度:</label>
                <input name="progress" type="number" value={this.state.progress} onChange={this.onInputChange}/>  
                <input type="button" value="追加" onClick={this.add} />
            </div>
        )
    }
}
