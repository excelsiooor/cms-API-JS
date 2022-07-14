import MainPage from "../pages/MainPage";
import Registration from "../pages/Registration";
import LogIn from "../pages/LogIn";
import Admin from "../pages/Admin";

export const privateRoutes = [
    {path: '/admin', component: Admin, exact:true}
]

export const publicRoutes = [
    {path: '/main', component: MainPage, exact:true},
    {path: '/registration', component: Registration, exact:true},
    {path: '/logIn', component: LogIn, exact:true},
]