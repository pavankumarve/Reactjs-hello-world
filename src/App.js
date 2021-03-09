import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import { Component } from 'react';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Box from './Components/Box';
import React from 'react'
import About from './Components/About';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import Home from './Components/Home';
import GoogleMap from './Components/GoogleMap';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';









// function App() {
//   return (
//     <div className="App">
//      <Greet/>
//      <Welcome/>
//      <Hello/>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
  function App(){
    return (
//       // <div className='App'>

//       /* <Greet name='Bruce' heroName='batman'><p>This is props example</p></Greet>
// //       <Greet name='pavan' heroName='superman'><button>submit</button></Greet>
// //       <Greet name='hari' heroName='spiderman'/> */
//       /* <Welcome name='sai' heroName='spiderman'><p>welcome sai</p> </Welcome>
//      <Welcome name='balu' heroName='batman'>welcome balu <button>submit</button> </Welcome> 
//      <Welcome name='kunda' heroName='superman'>welcome kunda </Welcome> */

//     /* // </div> */ 

//     /* <Message /> */ 

//     /* <Counter/> */ 

//     /* <FunctionClick /> */ 
//     /* <ClassClick/> */ 
//     /* <EventBind/> */ 

//     /* <ParentComponent/> */ 
//     /* <Box/> */ 

//       </div >
<Router>
<div className='App'>
<Nav/>
<switch>
<Route path='/' exact  component={Home}/>
<Route path='/about' component={About}/>
<Route path='/shop' component={Shop}/>
<Route path='/map' component={GoogleMap}/>

</switch>
</div>
</Router>
            
    )
  }


export default App;
