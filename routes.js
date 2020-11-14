import Home from './components/home';

import { Route } from "react-router-dom";

const routes = [
    {
        render: (props) => (
            <Route path="/">
                <Home  />
            </Route>
        )
    },
];

export default routes;
