import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import '../../CSS/Homepage/ButtonGroup.css';

function ButtonGroup(){
    
    return(
        <>
            <div className="log">
                <Button variant="contained" className="log" href="/Login">Login</Button>
            </div>
            <div className="button">
               <Button variant="outlined" className="sign" href="/SignUp">Sign up</Button> 
            </div>
        </>
    );
}

export default ButtonGroup;
