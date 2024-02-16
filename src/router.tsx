import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {PostsPage, UserDetailsPage, UsersPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>, children: [
                    {
                        path: ':id', element: <UserDetailsPage/>
                    }
                ]
            },
            {
                path: 'posts', element: <PostsPage/>
            }
        ]
    }
]);

export {
    router
}