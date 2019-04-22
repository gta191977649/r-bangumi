import React, { Component } from 'react';
import Seasons from './seasons';
import '../css/bangumi.css';

class Bangumi extends Component {
    render() {
        const seasons = this.props.seasons.map((season,key) => 
            <Seasons data={season} key={key}/>
        )
        return (
            <div className="bangumi" >
                <h1>{this.props.name}</h1>
                {/* 可以有很多季 */}
                {seasons}

                <hr/>
            </div>
        );
    }
}


export default Bangumi;