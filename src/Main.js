import React from 'react';
import './Main.css';
import TimeBanner from './TimeBanner';
import {connect} from 'react-redux';

export class Main extends React.Component{
    render(){
        console.log(this.props.fullState)
            return(
                    <div id='background'>
                        <TimeBanner/>
                        <div></div>
                        {/* <PastMins/>
                        <Summary/>
                        <FutureMins/> */}
                    </div>
            )
    }
  
}  
    const mapStateToProps = state => ({
        fullState: state
    });
    export default connect(mapStateToProps)(Main)