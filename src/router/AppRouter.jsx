import { Switch, Redirect, Route } from 'react-router-dom';
import {publicRoutes, privateRoutes} from './router';

function AppRouter () {
return (
    <Switch>
        {privateRoutes.map(route =>
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
        {/* <Redirect to='/main'/> */}
    </Switch>
);
}

export default AppRouter;