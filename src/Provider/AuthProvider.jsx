import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // useEffect(()=>{
    //     const subscribe = onAuthStateChanged(auth, currentUser=>{
    //         setUser(currentUser)
    //         console.log('ovserv from auth:', currentUser);
    //         setLoading(false)
    //     })

    //     return  () =>{
    //         return subscribe()
    //     }
    // },[])

    useEffect(()=>{
        const unsbuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('state change:',currentUser);
            if(currentUser){
                // do somthing 
                const userInfo = {email : currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // do somthing 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () =>{
            unsbuscribe()
        }
    },[axiosPublic, auth])
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;