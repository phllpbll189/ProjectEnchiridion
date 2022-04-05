import React, {useState} from 'react';
import '../../CSS/Homepage/UserButton.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";

/*
UserAuth:
    Takes a callback function that recieves:
        Boolean: if the user is authenticated

        if its true it send a user object
        more research needs to be done about the exact shape of the object

        if not it will send an error code
*/
async function userAuth(callback){
    await Auth.currentAuthenticatedUser({
    /*
        FIX ME!

        bypassCache needs to be set to false when testing is finished.
    */
        bypassCache: true 
    }).then(user => {
        callback(true, user);
    }).catch(err => {
        callback(false, err);
    }); 
};

export default function UserButton(props){
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    async function userSignOut(){
        await Auth.signOut().then(setOpen(!open)).then(setSuccess(false)); 
        await setOpen (!open);        
    }

    return(
        <>
            <div 
                data-testid="UserButton"
                className='UserButton header' 
                onClick={() => {

                    //if else statement depending on if there is cached data
                    setOpen(!open)
                    
                    if(open){
                        userAuth((result, outcome) => {
                            if(result){
                                setSuccess(true);
                                console.log(outcome)
                            }
                        }); 
                    }
                }}
            ></div>
        
            {open && <DropdownMenu success={success}/>}
        </>
    );


    function DropdownMenu(props) {
        
        function DropdownItem(props){
            //this returns each individual dropdown item
            const navigate = useNavigate();
            function handleClick() {
                if(props.signOut){
                    userSignOut();
                    navigate('/') 
                }else{
                    navigate(props.nav || '/')  //default to homepage
                } 
            }
            
            return (
                <a
                href='#' 
                className='menu-item'
                onClick={handleClick}
                >

                    <span className='icon-button'>{props.leftIcon}</span>
                    {props.children}
                    <span className='icon-right'>{props.rightIcon}</span>

                </a>
            );
        }
        
        //IF NOT SIGNED IN
        if(!props.success){
            console.log("Not Signed In")
            return (
                <div
                    data-testid="DropdownMenu" 
                    className='dropdown'>
                    <DropdownItem
                        nav='/SignUp'
                        leftIcon={<div data-testid="Signup" className='UserButton left'></div>}
                    >
                        sign in
                    </DropdownItem>
                    

                    <DropdownItem
                        nav='/Editor'
                    >
                        Edit Guide
                    </DropdownItem>
                
                </div>
            ); 
        }
        
        //IF SIGNED IN
        console.log("Not Signed In")
        return (
            <div 
                data-testid="DropdownMenu" 
                className='dropdown'>
                <DropdownItem
                    nav='/SignUp'
                    leftIcon={<div className='UserButton left'></div>} //route to profile here
                >
                    My Profile
                </DropdownItem>

                <DropdownItem nav='/Editor'>
                    Make a guide
                </DropdownItem>

                {/* <DropdownItem
                signOut={true}
                >Sign Out</DropdownItem> */}

                <DropdownItem
                >About Us</DropdownItem>
            </div>
        );
    }
}
export {
    userAuth
}