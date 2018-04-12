import React from 'react';
import './Main.css';
import TimeBanner from './TimeBanner'

export default class Main extends React.Component{
    render(){
            return(
                    <div id='background'>
                        <TimeBanner/>
                        {/* <Records/>
                        <Summary/>
                        <Plans/> */}
                    </div>
            )
    }
    
}