import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [ user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const loginUserWithGoogle = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loginUserWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;