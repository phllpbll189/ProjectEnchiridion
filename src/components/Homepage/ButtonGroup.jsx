import * as React from 'react';
import Button from '@mui/material/Button';
import '../../CSS/Homepage/ButtonGroup.css';

function ButtonGroup(){
    
    return(

        <div className="button">
            <Button variant="outlined" className="sign" href="/SignUp">Sign up</Button> 
        </div>

    );
}

export default ButtonGroup;
