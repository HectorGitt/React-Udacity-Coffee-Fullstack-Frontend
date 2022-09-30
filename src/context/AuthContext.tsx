import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext({} as any);

export default AuthContext;

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    let [authTokens, setAuthTokens] = useState<string>("");
    let [user, setUser] = useState<string>("");

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const accessToken = urlParams.get('access_token');
        const refreshToken = urlParams.get('refresh_token');
    
        console.log(accessToken);
        console.log(refreshToken);
      }, []);

    return (
        <AuthContext.Provider value={{'name': 'hector'}}>
            {children}
        </AuthContext.Provider>
    );
};
