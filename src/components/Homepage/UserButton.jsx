import React, {useState} from 'react';
import '../../CSS/Homepage/UserButton.css';
import { ReactComponent as profileIcon } from '../../CSS/IMAGES/Profile.png';
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import reactDom from 'react-dom';


//button that contains dropdown

/*
this button is generally responsible for the right side of the navbar dropdown menu
can be re used just for the profile button. this will be useful for when we want to 
extract the user profile image for whatever reason.
*/
async function userAuth(callback){
    await Auth.currentAuthenticatedUser({
                    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
                    }).then(user => {
                            callback(true, user)
                    }).catch(err => {
                        callback(false, err)
                    }); 
}

export default function UserButton(props){
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null); //may use this later?
    const [succ, setSucc] = useState(false);
    return(
        <>
            <div className='UserButton header' onClick={() => {
                userAuth((success, outcome) => {
                    if(success){
                        setSucc(true)
                        
                    }
                }); 
                setOpen(!open);}
            }></div>
            
            {open && <DropdownMenu
                success={succ}
            />}
            
        </>
    );
}

export function DropdownMenu(props) {
    

    function DropdownItem(props){

        //this is responsible for navigation from dropdown
        const navigate = useNavigate();
        function handleClick() {
            if(props.nav){
               navigate(props.nav) 
            }
        }

        //this returns each individual dropdown item
        return (
            <a href='#' className='menu-item' onClick={handleClick}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    }
             
    if(props.success != true){
            console.log("active")
            return (
                <div className='dropdown'>
                    <DropdownItem
                    nav='/SignUp'
                    leftIcon={<div className='UserButton left'></div>}>sign in</DropdownItem>
                </div>
            ); 
    }

    return (
            <div className='dropdown'>
                <DropdownItem
                    nav='/SignUp'
                    leftIcon={<div className='UserButton left'></div>} //route to profile here
                >My Profile</DropdownItem>

                <DropdownItem
                    nav="Editor"
                >Make a guide</DropdownItem>

                <DropdownItem>About Us</DropdownItem>
            </div>
        );
}





