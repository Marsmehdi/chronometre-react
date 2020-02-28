import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      second:0,
      munit:0,
      hours:0,
        }
      
      setInterval (
        ()=>{
          this.setState({
            munit:Math.floor(this.state.second/60)
          })
        },1000
      )
      setInterval (
        ()=>{
          this.setState({
            hours:Math.floor(this.state.munit/60)
          })
        },1000
      )
    
    
    
    }
    handleStartClick = () =>{
      
      this.incriment = setInterval (
        ()=>{
          this.setState({
            second:this.state.second +1
          })
        },1000
      )
    }
    handleStopClick = () =>{
      clearInterval(this.incriment)
    }
      render(){
      return(<div><div className ="chron"><h1>{(('0'+ this.state.hours % 60).slice(-2))}:{(('0'+ this.state.munit % 60).slice(-2))}:{ (('0'+ this.state.second % 60).slice(-2))}</h1>
        <button type='button' onClick={this.handleStartClick} >Start</button>
        <button  type='button' onClick={this.handleStopClick} >stop</button>
        </div></div>
        

        );
      }
}

export default Timer;
