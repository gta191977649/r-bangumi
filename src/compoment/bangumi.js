import React, { Component } from 'react';
import Seasons from './seasons';
import '../css/bangumi.css';

class Bangumi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name,
            seasons: this.props.seasons,
        };
    }
    render() {
        return (
            <div className="bangumi" >
                {this.props.name}
                <h1>Bangumi name</h1>
                {/* 可以有很多季 */}
                    <Seasons/>

                <hr/>
            </div>
        );
    }
}


export default Bangumi;