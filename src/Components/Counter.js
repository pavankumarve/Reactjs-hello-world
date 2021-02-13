import { Component } from "react"
import react ,{component} from 'react'

class Counter extends Component{
constructor(){
    super()
    this.state={
        count:0
        
    }
}
 
incement(){
    this.setState({
        count: this.state.count + 1
       
        
    })
   
}

    render(){
        return(
            <div>
               <div> count - {this.state.count}</div>
                <button onClick={() => this.incement()}>Increment</button>
            </div>
        )
    }
}

export default Counter