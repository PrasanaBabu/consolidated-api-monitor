import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import AppDetail from "./pages/AppDetail";

function App() {

    let router = createBrowserRouter([
        {path: '/', element: <HomePage/>},
        {path: '/:appName', element: <AppDetail/>},
    ])

    return (
        // <>
            <RouterProvider router={router}/>
        // </>
    );
}

export default App;
