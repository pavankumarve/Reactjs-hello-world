import react,{Component} from 'react'

class Welcome extends Component{
render(){
    const {name,heroName} = this.props
    return (
        <div>
    <h1>Hello {name} {heroName}</h1>
    {this.props.children}
    </div>
    )
}
}


export default Welcome