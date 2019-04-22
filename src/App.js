import React, { Component } from 'react';
//componments
import Bangumi from './compoment/bangumi';
import AddBangumi from './compoment/container/addBangumi';
import Helper from './Helper';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //bangumi: []
      
      bangumi:[
        {
          id: 0,
          name: "Your lie in April",
          seasons: [
            { name:"01",max_episodes:13,progress:5},
          ]
        }
      ]
      
    }
    //函数绑定
    this.addBangumi = this.addBangumi.bind(this)
    this.deleteBangumi = this.deleteBangumi.bind(this)
    
  }
  addBangumi(newBangumi) {
    newBangumi.id = Helper.generateBangumiId(this.state.bangumi);
    this.setState(state => ({
      bangumi: [...state.bangumi, newBangumi]
    }))
    console.log(newBangumi);
  }
  updateBangumi(id,newBangumi) {

  }
  deleteBangumi(id) {
    let toDeleteIdx = Helper.findArrayIndexById(this.state.bangumi,id);
    let newBangumi = this.state.bangumi
    newBangumi.splice(toDeleteIdx,1)
    this.setState({
      bangumi:  this.state.bangumi
    })
    console.log(toDeleteIdx,this.state.bangumi)
  }
  render() {
    const contructBangumi = this.state.bangumi.map((bangumi,idx) => 
      <Bangumi deleteBangumi={this.deleteBangumi} key={bangumi.id} id={bangumi.id} name={bangumi.name} seasons={bangumi.seasons}/>
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
