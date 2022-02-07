import React from 'react';
import TopBar from './TopBar';
import './CSS/Profile.css'

function Profile(){
    return (
        /* 
        This returns the tap nav bar
        It has a menu button
        a Title
        a search bar
        and a login/signup button
        */
        <div className="Profile">
            <TopBar />
            
            <img class="wall_pic" src="https://reviverestore.org/wp-content/uploads/2017/05/placeholder-image-cropped.jpg" alt="Wallpaper Pic"></img>


            <div className="profile_card">
                <img class="profile_pic" src="https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png" alt="Profile Pic"></img>
                <h1 className="profile_name">First Last</h1>
                <h1 className="occupation_name">User Occupation</h1>
                <h1 className="followers">000 Followers</h1>
            </div>



            <div className="video_bar">
                <a className="home_bar">Home</a>
                <a className="playlist_bar">Playlist</a>
                <a className="about_bar">About</a>
            </div>

            <div tabindex="0" className="home_page">

            </div>

            <div tabindex="1" className="playlist_page">

            </div>

            <div tabindex="2" className="about_page">

            </div>

        </div>
    );
}

export default Profile;
