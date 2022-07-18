import MainPage from "../pages/MainPage";
import Registration from "../pages/Registration";
import LogIn from "../pages/LogIn";
import Admin from "../pages/Admin";
import UserProfile from "../pages/UserProfile";
import Order from "../pages/Order";
import Payment from "../pages/Payment";
import FilmPage from "../pages/FilmPage";
import AllMovies from '../components/Admin/AllMovies';
import CreateMovie from "../components/Admin/CreateMovie";
import UpdateMovie from '../components/Admin/UdateMovie';

export const adminRoutes = [
    {path: '/admin', component: Admin, exact:true},
    {path: '/admin/all', component: AllMovies, exact:true},
    {path: '/admin/create', component: CreateMovie, exact:true},
    {path: '/admin/update', component: UpdateMovie, exact:true}
];


export const publicRoutes = [
    {path: '/main', component: MainPage, exact:true},
    {path: '/registration', component: Registration, exact:true},
    {path: '/logIn', component: LogIn, exact:true},
    {path: '/film', component: FilmPage, exact:true},
];

export const userRoutes = [
    {path: '/profile', component: UserProfile, exact:true},
    {path: '/order', component: Order, exact:true},
    {path: '/payment', component: Payment, exact:true},
];