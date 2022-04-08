import { Auth } from 'aws-amplify';

/*
UserAuth:
    Takes a callback function that recieves:
        Boolean: if the user is authenticated

        if its true it send a user object
        more research needs to be done about the exact shape of the object

        if not it will send an error code
*/
export async function userAuth(callback) {
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
}
