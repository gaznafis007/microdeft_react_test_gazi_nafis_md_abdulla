/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;