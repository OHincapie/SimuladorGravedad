import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import { WorldApp } from "../components/WorldApp";


export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/world",
        element: <WorldApp/>
    }
]);