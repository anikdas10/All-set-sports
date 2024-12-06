import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [ user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const [theme,setTheme] = useState(true);

    const toggleTheme = () =>{
        setTheme(!theme)
    }
    console.log(theme);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUserWithGoogle = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    const updateUserProfile = (updatedData)=>{
        setLoading(true);
       return updateProfile(auth.currentUser,updatedData);
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
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
        loginUserWithGoogle,
        createUser,
        updateUserProfile,
        loginUser,
        loading,
        theme,
        toggleTheme
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