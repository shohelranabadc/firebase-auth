import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

const LoginStateStatus = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                
                const email = currentUser?.email;
                setUser(email);
                // ...
            } else {
                // User is signed out
                // ...

                console.log("user not found")
            }
            });

            return () => unsubscribe();

        }, [auth])

  return (
    <div>
        {
            user ? <p>Welcome : {user}</p> : <p>Please Login here</p>
        }
    </div>
  )
}

export default LoginStateStatus