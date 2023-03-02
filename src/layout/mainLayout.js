import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header/header'
export const UserContext = createContext()

const MainLayout = () => {
 
    return (
        <>
            <UserContext.Provider value={ null}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </>
    )
}

export default MainLayout