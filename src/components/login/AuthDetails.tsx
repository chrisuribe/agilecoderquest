import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../../firebase-config';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser
            } else {
                setAuthUser(null);
            }
        })
        return () => listen();
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out worked')
        }).catch(error => console.log(error))
    }

    return <div>{authUser ? <><p>{`Signed In as ${authUser}`}</p><button onClick={userSignOut}> Sign Out</button> </> : <p>Signed Out</p>}</div> 
};

export default AuthDetails