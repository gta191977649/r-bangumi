import React, { Component } from 'react';
//componments
import Bangumi from './compoment/bangumi';
import AddBangumi from './compoment/container/addBangumi';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bangumi:[
        {
          name: "Sakura",
          seasons: [
            { name:"aaa",max_episodes:13,progress:3}
          ]
        }
      ]
    }
    //函数绑定
    this.addBangumi = this.addBangumi.bind(this)
  }
  addBangumi(newBangumi) {
    this.setState(state => ({
      bangumi: [...state.bangumi, newBangumi]
    }))
  }
  render() {
    const contructBangumi = this.state.bangumi.map((bangumi,idx) => 
      <Bangumi key={idx} name={bangumi.name} seasons={bangumi.seasons}/>
    )
    return (
      <div className="App">
        <AddBangumi addBangumi={this.addBangumi}/>
        <h1>番剧</h1>
        {/* 可以有很多bangumi */}
        {contructBangumi}
      </div>
    );
   
    
  }
}

export default App;
