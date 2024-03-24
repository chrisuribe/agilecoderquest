import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from '../../firebase-config';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const removeAuthListener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
        return () => removeAuthListener();
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out worked')
        }).catch(error => console.log(error))
    }

    return <div>{authUser ? <><p>{`Signed In as ${auth.currentUser?.email}`}</p><button onClick={userSignOut}> Sign Out</button> </> : <p>Signed Out</p>}</div> 
};

export default AuthDetails