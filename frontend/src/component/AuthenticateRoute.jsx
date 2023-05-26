import React from 'react'
import { useSelector } from "react-redux";
import { Dashboard } from '../pages';

export const AuthenticateRoute = () => {
    let isAuthenticated;
    const { user } = useSelector((state) => state.user)
    if (user == null) {
        isAuthenticated = false
    }
    else {
        isAuthenticated = true
    }
    const authenticate = {
        AuthenticatedRoute: ({ children }) => {
            return (
                <> {
                    isAuthenticated ? children : <div className="bg-bgColor h-screen text-slate-50 font-extrabold text-4xl flex justify-center items-center">
                        You are not authenticated
                    </div>
                }</>
            )
        }
        ,
        UnAuthenticatedRoute: ({ children }) => {
            return <>{isAuthenticated ? <Dashboard /> : children
            }</>
        }
    }
    return authenticate


}
