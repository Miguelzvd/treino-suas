import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from "../layouts/index.tsx";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
            </Route>
        </ReactRoutes>
    );
};

export default Routes;