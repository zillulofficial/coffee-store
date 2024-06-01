import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext } from "react";
import { useState } from 'react';


const AuthContext= createContext(null)
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const authInfo= {
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}