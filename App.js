import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'
import FunctionClick from './components/FunctionClick'
import CFunctionClick from './components/CFunctionClick'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appstyle.css';
import Style from './appstyle.module.css';
import Form from './components/Form'
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import ClassCounterOne from './components/ClassCounterOne';
import FunctionCounterOne from './components/FunctionCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import context from './components/context';
import Vikas from './components/Vikas';
import Supriya from './components/Supriya';
import HOC from './components/HOC';
class App extends React.Component{
  render(){
    const numbers=[3,4,5,6,];
    return(
      <div className="App">
      {/*<h1 className={Style.success}>Green</h1>
      <h1 className='error'>Error</h1>

    <Header name="anuj" last="sharma" >
    <p> anuj is a good boy</p>
    </Header>
    <Header name="vivek" last="verma" >
    <button>click here </button>
    </Header>
    <Header name= "rahul" last="sahu" />
    <CHeader  name="supriya" last="yadav "/>
    <Channel/>
    <FunctionClick/>
    <CFunctionClick roll="22" numbers={numbers} /> 
    <Stylesheet isvalue={true}> </Stylesheet>
    <Inline></Inline>
    <Form></Form>
    <Routing></Routing>
    <LifeCycleA></LifeCycleA>
    <Product></Product>
    <PostList></PostList>
    <PostForm></PostForm>
    <HookCounter></HookCounter>
    <HookObject></HookObject>
    <HookArray></HookArray>
    <ClassCounterOne></ClassCounterOne>
    <FunctionCounterOne></FunctionCounterOne>
    <ClassMouse></ClassMouse>
    <HookMouse></HookMouse>
    <C></C>
    <A></A>
    <context></context>
    <B></B>*/}
    <Vikas></Vikas>
    <Supriya></Supriya>
    <HOC></HOC>
    
    

    
    </div>
    );
  }
}

export default App;
