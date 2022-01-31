import React from 'react';
import TopBar from '../components/Homepage/TopBar';
import '../CSS/index.css'

function HomePage(){
    return (
        /* 
        This returns the tap nav bar
        It has a menu button
        a Title
        a search bar
        and a login/signup button
        */
        <div className="HomePage">
            <TopBar />
        </div>
    );
}

export default HomePage;
