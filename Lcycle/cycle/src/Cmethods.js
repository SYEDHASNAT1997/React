import React, { Component } from 'react';

class Dmount  extends Component {
    constructor(){
        super();
        console.log("constructor");
    }
    render() { 
        console.log("render");
        return (<div>
            <h1>hy</h1>
        </div>  );
    }
    componentDidMount(){
        console.log("didmount");
    }
}
 
export default Dmount;