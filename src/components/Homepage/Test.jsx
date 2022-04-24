import * as React from 'react';
import {Auth} from 'aws-amplify';

export default function Test() {
    return(
        <button onClick={printInfo}>Retrieve User Info</button>
    );
}

async function printInfo(){
    const user = await Auth.currentUserInfo()
    console.log(user)
}
