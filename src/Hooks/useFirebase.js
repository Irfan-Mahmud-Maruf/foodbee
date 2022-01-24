import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInisitilize from "../Firebase/firebase.init";

firebaseInisitilize()
const useFirebase = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //GoogleSinginSystem
    const googleSingin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUsers(user);
            })
            .catch(error => {
                const errorMessege = error.message;
                setError(errorMessege);

            })
    }
    //get the crunnently singin user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {

            }
        });
        return () => unSubscribe;
    }, []);

    //singOut system
    const singOut = () => {
        signOut(auth)
            .then(() => {
                setUsers('')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return {
        users,
        error,
        googleSingin,
        singOut
    }
}

export default useFirebase;