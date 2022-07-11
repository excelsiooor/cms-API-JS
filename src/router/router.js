import MainPage from "../pages/MainPage";
import LogIn from "../pages/LogIn";
import Admin from "../pages/Admin";

export const privateRoutes = [
    {path: '/main', component: MainPage, exact:true},
    {path: '/admin', component: Admin, exact:true}
]

export const publicRoutes = [
    {path: '/logIn', component: LogIn, exact:true},
]