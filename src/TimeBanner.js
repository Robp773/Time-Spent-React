import React from 'react';
import './TimeBanner.css';
import { setTimeout } from 'timers';
import Login from './Login';

export default class TimeBanner extends React.Component{

    componentWillMount(){
        let date = new Date();
        let minutes, hours, period;
        // convert into 12 hour clock
        if(date.getHours() > 12){
            hours = date.getHours() - 12;
            period = 'PM';
        }
        else{
            hours = date.getHours();
            period = 'AM'
        }
        if(date.getMinutes() < 10){
            minutes = `0${date.getMinutes()}`
        }
        else{
            minutes = date.getMinutes();
        }
        let time = `${hours}:${minutes}`;   
        // create variable to count the exact number of seconds until the next minute. 
        let timeWait = (60 - date.getSeconds()) * 1000;
        this.setState({currentTime: time, timePeriod: period});
        setTimeout(function(){this.componentWillMount()}.bind(this),timeWait);
    }
 
    render(){     
        let date =  new Date();
        let currentDay = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
        return(
            <div id='timeBanner'>
                <h1 id='h1Banner'>Time $pent</h1>
                <Login/>
                <div id='timeAndDay'>                     
                    <div id='currentDay'>{currentDay}</div>
                    <div id='currentTime'>{this.state.currentTime} {this.state.timePeriod}</div>
                </div>
               
            </div>
        )
    }
}