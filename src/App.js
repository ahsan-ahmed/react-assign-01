import React, { Component } from 'react';
import logo from './logo.svg';
import Data1 from './Components/Data1'
import Data2 from './Components/Data2'
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <center>
        <table>
          <tbody>
          <tr>
            
            <td>name :</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>obj :</td>
            <td>{obj.name}</td>
          </tr>
          <tr>
            <td>data :</td>
            <td>{data.map(item=><li>{item}</li>)}</td>  
          </tr>
          <tr>
            <td>list :</td>
            <td>{list.map((item,index)=><li key={index}>{item.name}</li>)}</td>
          </tr>
          <tr>
            <td>complex :</td>
            <td>{complex.map(item=><li>company : {item.company} <br/>jobs :{item.jobs.map(itemInner=><li>{itemInner}</li>)}  </li>
        )}</td>
          </tr>
          </tbody>
          </table>
        </center>
        </p>
        <div>
          <hr/>
        <h2>Difference between import Something from ‘package’ VS import { 'Something' } from ‘package’</h2>
        <p>
        This is a something default import:<br/>

// package.js<br/>
import num from 'anyPackage'<br/>
It only works if anyPackage contains a something default export:<br/>

// anyPackage.js 
export default 1
In this case it doesn’t matter what name you assign to it when importing:<br/>

// package.js
import num from 'anyPackage'<br/>
import Mynum from ' anyPackage'<br/>
import something from 'anyPackage'<br/>
Because it will always resolve to whatever is the something default export of anyPackage.

This is a {'something'} import called anyPackage:<br/>

import { 'num' } from 'anyPackage'<br/>
It only works if anyPackage contains a {'something'} export called anyPackage:<br/>

export const num = 1<br/>
In this case the name matters because you’re importing a specific thing by its export name:<br/>

// package.js<br/>
import { 'num'} from 'anyPackage'<br/>
import {  'mynum'} from 'anyPackage' // Doesn't work!<br/>
import { ' something'} from 'anyPackage' // Doesn't work!<br/>
To make these work, you would add a corresponding {'something'} export to anyPackage:<br/>

// anyPackage.js<br/>
export const num= 1<br/>
export const mynum = 2<br/>
export const something = 3<br/>
A module can only have one something default export, but as many named exports as you like (zero, one, or many). You can import them together:<br/>

        </p>
        </div>
        <Data1/>
        <Data2/>
      </div>
    );
  }
}
export default App;

