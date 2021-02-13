import recat from 'react'


function ChildComponent(props){
    return(
        <div>
            <button onClick={() => props.newProb('Kumar')}>Click Me</button>
         </div>
    )
}


export default ChildComponent