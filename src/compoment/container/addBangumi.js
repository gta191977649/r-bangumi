import React, { Component } from 'react'

export default class AddBangumi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            seasonname:null,
            max_episodes:null,
        }
    }
    
    render() {
        return (
            <div>
                <h3>添加番剧</h3>
                <hr/>
                <label>番名:</label>
                <input value={this.state.props}/>  
                <label>季名:</label>
                <input value={this.state.props} />  
                <label>集数:</label>
                <input type="number" value={this.state.props} />  
                <label>进度:</label>
                <input type="number" value={this.state.props} />  
                <input type="button" value="OK" />
            </div>
        )
    }
}
