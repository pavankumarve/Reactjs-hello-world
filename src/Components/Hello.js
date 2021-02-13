import react from 'react'

const Hello=() => {
// return(
// <div>
//     <h1>hello</h1>
//     </div>
// )
return react.createElement('div',{id:'hello',className:'pavan'},
react.createElement('h1',null,'Hellow-pavan'))

}


export default Hello