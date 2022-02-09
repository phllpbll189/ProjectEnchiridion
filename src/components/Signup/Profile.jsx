import React from 'react';
import '../../CSS/Signup/Profile.css';

function Profile(){
    return (
        <div className="Profile">
            
            <div className="profile_card">
                <img className="wall_pic" src="https://www.uhonline.hawaii.edu/uhoic/wp-content/uploads/2021/08/banner-placeholder.jpg" alt="Wallpaper Pic"></img>
                <img className="profile_pic" src="https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png" alt="Profile Pic"></img>
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

    //this is not the final version. last three divs (Homepage, playlist, and about) will be the product of a react component
    //they will then return the div dynamically based on queryies.
}

export default Profile;
