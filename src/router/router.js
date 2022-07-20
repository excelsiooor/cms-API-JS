import MainPage from "../pages/PublicPages/MainPage";
import Registration from "../pages/PublicPages/Registration";
import LogIn from "../pages/PublicPages/LogIn";
import Admin from "../pages/AdminPages/Admin";
import UserProfile from "../pages/UserPages/UserProfile";
import Order from "../pages/UserPages/Order";
import Payment from "../pages/UserPages/Payment";
import FilmPage from "../pages/PublicPages/FilmPage";
import AllMovies from '../components/Admin/AllMovies';
import CreateMovie from "../components/Admin/CreateMovie";
import UpdateMovie from '../components/Admin/UdateMovie';

export const adminRoutes = [
    {path: '/admin', component: Admin, exact:true},
    {path: '/admin/all', component: AllMovies, exact:true},
    {path: '/admin/create', component: CreateMovie, exact:true},
    {path: '/admin/update', component: UpdateMovie, exact:true},
];


export const publicRoutes = [
    {path: '/main', component: MainPage, exact:true},
    {path: '/registration', component: Registration, exact:true},
    {path: '/logIn', component: LogIn, exact:true},
    {path: '/movies/**', component: FilmPage, exact:true},
];

export const userRoutes = [
    {path: '/profile', component: UserProfile, exact:true},
    {path: '/order', component: Order, exact:true},
    {path: '/payment', component: Payment, exact:true},
];