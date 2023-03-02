
import { useRoutes } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import Landing from './pages/landing/landing';
import Profile from './pages/profile/profile';

const Routes = () => {
    return useRoutes([{
        path: "/",
        element: <MainLayout />,
        children: [
            {
            path: "/",
            element: <Landing />
            },
            {
            path: "/profile/:id",
            element: <Profile/>
            }
        ]
    },
    ])
}

export default Routes;