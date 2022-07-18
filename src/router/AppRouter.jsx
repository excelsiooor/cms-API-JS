import { Switch, Redirect, Route } from 'react-router-dom';
import {publicRoutes, adminRoutes, userRoutes} from './router';

function AppRouter () {
return (
    <Switch>
        {adminRoutes.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        {publicRoutes.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        {userRoutes.map(route =>
            <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        <Redirect to='/main'/>
    </Switch>
);
}

export default AppRouter;