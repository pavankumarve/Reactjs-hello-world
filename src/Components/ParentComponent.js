import react ,{Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Pavan'
        }
        this.eventHandling=this.eventHandling.bind(this)
    }

    eventHandling = (chidName) => {
        alert(`Hello ${this.state.message} ${chidName}`)
    }
    render(){
        return(
        <div>
            <ChildComponent newProb={this.eventHandling}/>
        </div>
        )
    }
}

export default ParentComponent