import * as React from 'react';
import '../../CSS/Homepage/TopBar.css'
import SearchBar from './SearchBar';
import ButtonGroup from './ButtonGroup'

// Need to make this a class that will recieve props.
//we will store the right and middle elements in state
// then we will generate the bar based on what was given
export default class TopBar extends React.Component {
    //need to make a function to change the state so we can have control of what 

    render() {
        const Middle = props => <div className='middle'>{this.props.middleChild}</div>
        const End = props => <div className='right'>{this.props.endChild}</div>
        
        return (
            /* 
            This returns the tap nav bar
            It has a menu button
            a Title
            a search bar
            and a login/signup button
            */
            <div className="TopBar">

                <div className='leftContainer start'>
                    {/*Grouping things in left Container to
                    allow us to use full power of flex box*/}
                    <button className="SvgBackground"></button>
                    <div className="TopTitle">
                        Project 
                        <div>Enchiridion</div>
                    </div>

                </div>
                {/* <SearchBar className="search"/> */}
                <Middle></Middle>
                {/*had to put buttonGroup in a div to be able to give it a class name*/} 
                <End></End> 
            </div>
        );
    }

}

