import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header/header'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout