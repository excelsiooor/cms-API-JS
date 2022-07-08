import MainPage from "../pages/MainPage";
import LogIn from "../pages/LogIn";


export const privateRoutes = [
    {path: '/main', component: MainPage, exact:true},
]

export const publicRoutes = [
    {path: '/login', component: LogIn, exact:true},
]