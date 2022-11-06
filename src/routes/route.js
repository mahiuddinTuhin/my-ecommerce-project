import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../layout/Main";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
    {
        path: '/*',
        element:<h1>Error occoured</h1>
    }
])