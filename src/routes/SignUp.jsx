import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';
import awsconfig from '../aws-exports';
import TopBar from '../components/Homepage/TopBar';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

Amplify.configure(awsconfig);
//this is what is called to render the react element initially.
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...props
          };

    }

    render(){
        const style = {
            "color": '#ffffff',
            "font-size": "21px"
        }


        return (
            <>  <TopBar
                    middleChild={<></>}
                    endChild={<></>}
                    />
                <div className='center'>
                    <Authenticator
                    handleChange
                    >
                    {({ signOut, user }) => { //anon function

                        return (
                            <div className="App">
                                <p style={style}>
                                    Profile Under Construction!
                                    <br></br>
                                    welcome
                                </p>
                                <button onClick={signOut}>Sign out</button>
                            </div>
                        );
                    }}      
                    </Authenticator>  
                </div>
            </>
        );
    }
}

export default SignUp;

