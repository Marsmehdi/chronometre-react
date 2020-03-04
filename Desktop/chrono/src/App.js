import React from 'react';


import './App.css';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      second:0,
      munit:0,
      hours:0,
      stop : true ,
      nombtn : "Start",
        }
      
     
     
    
    
    
    }
    handleStartClick = () =>{
      
      if(this.state.stop===true)
      {this.incriment = setInterval (
        ()=>{
          this.setState({
            stop: false,
            nombtn : "Stop" ,
          })
          this.setState({
            second:this.state.second +1,
            munit:Math.floor(this.state.second/60),
            hours:Math.floor(this.state.munit/60)
          })
        },1000
      )}
      else{clearInterval(this.incriment)
        this.setState({
          stop: true,
          nombtn : "Start" ,
        })
      }
    }
    handleStopClick = () =>{
      clearInterval(this.incriment)
      this.setState({
        second: 0,
        munit: 0,
        hours : 0,
        stop:true,
        nombtn : "Start" ,
      })
    }




      render(){
      return(<div className ="chron"><div ><h1>{(('0'+ this.state.hours % 60).slice(-2))}:{(('0'+ this.state.munit % 60).slice(-2))}:{ (('0'+ this.state.second % 60).slice(-2))}</h1>
        <div className="bbtn"><button type='button' onClick={this.handleStartClick} >{this.state.nombtn}</button>
        <button  type='button' onClick={this.handleStopClick} >Reset</button></div>
        </div></div>
        

        );
      }
}

export default Timer;
