import React, { Component } from 'react';
//componments
import Bangumi from './compoment/bangumi';
import AddBangumi from './compoment/container/addBangumi';
class App extends Component {
  testData = [
    {
      name: "Sakura",
      seasons: [
        { name:"aaa",max_episodes:13,progress:3}
      ]
    },
  ]
  render() {
    const contructBangumi = this.testData.map((bangumi,idx) => 
    <Bangumi key={idx} name={bangumi.name} seasons={bangumi.seasons}/>
    )
    return (
      <div className="App">
        <AddBangumi/>
        <h1>番剧</h1>
        {/* 可以有很多bangumi */}
        {contructBangumi}
      </div>
    );
   
    
  }
}

export default App;
