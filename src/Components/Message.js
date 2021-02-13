import { Component } from "react"

import react ,{component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Hi pavan kumar'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks Have a good day'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>submit</button>
        </div>
        )
    }
}

export default Message