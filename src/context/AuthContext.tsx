import React, { useState }  from "react";

export type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthContext = React.createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => 43,
})

export const AuthContextProvider: React.FC<{}> = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}