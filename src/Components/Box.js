import React, { Component } from 'react'

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            background: 'red'
     };
        this.changeColor = this.changeColor.bind(this);
      }

    changeColor(){
        this.setState({
            background:'gray'
            
           
        });
    }
    render() {
        return (
            <div>
                <h1>Reactjs</h1>
                <div style={{ backgroundColor:this.state.background, width:100, 
                marginLeft:633, height:100}} onClick={this.changeColor}></div>

                {/* <div>
                <button style={{ backgroundColor: this.state.background }} onClick={this.changeColor} >Click here</button>
                </div> */}
            </div>
        
    
        
        )
    }
}

export default Box
