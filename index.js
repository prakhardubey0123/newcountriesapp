import { createRoot } from "react-dom/client";
import App from './App'
import{
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import TaskConc from "./components/TaskConc";
import Header from "./components/Header";
import ParentApp from "./ParentApp";
import Error from "./components/Error";
import CountryDetails from "./components/CountryDetails";



const router= createBrowserRouter(
[
    {
        path:'/',
        element: <ParentApp/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/contact',
                element:<TaskConc/>
            },
            {
                path:'/:Countrydetails',
                element:<CountryDetails/>
            },
        ],
    },
])


const root= createRoot(document.querySelector('#root'));
// root.render(<>
// <Header/>
// <RouterProvider router={router}/>
// </>);
// root.render(<App/>);

root.render(<RouterProvider router={router}/>)
