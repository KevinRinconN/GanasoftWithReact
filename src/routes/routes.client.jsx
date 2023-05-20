import { ClientLayout } from '../layouts';
import { Home } from '../pages';

const routesClient = [
    {
        path: "/client",
        layout: ClientLayout,
        component: Home,
    }
];

export default routesClient;