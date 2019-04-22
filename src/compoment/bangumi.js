import React, { Component } from 'react';
import Seasons from './seasons';
import '../css/bangumi.css';

class Bangumi extends Component {
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
        //console.log(this.state.mode)
    }
    render() {
        const seasons = this.props.seasons.map((season,key) => 
            <Seasons data={season} key={key}/>
        )
        const editBangumi = <div className="bangumi-wrapper">
            <label>番剧名:</label>
            <input type="text" value={this.props.name}/>
        </div>
        //渲染模式
        const bangumi = <div className="bangumi-wrapper">
                {this.state.mode === 'EDIT' ?　editBangumi : 
                <h1>{this.props.name} id: #{this.props.id} </h1>
                }
                          

                {/* 可以有很多季 */}
                {seasons}
                <hr/>
            </div>
        
        return (
            <div className="bangumi" >
                <div className="tool-tip" style={{float:'right'}}><a href="#" onClick={this.toogleEditMode}>编辑</a>|<a href="#" onClick={ ()=> this.props.deleteBangumi(this.props.id)}>消除</a></div>
                {/* 条件渲染 */}
                {bangumi}
               
            </div>
        );
    }
}


export default Bangumi;