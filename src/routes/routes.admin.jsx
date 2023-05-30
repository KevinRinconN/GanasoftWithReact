import { AdminLayout } from '../layouts';
import { HomeAdmin } from '../pages';
import { Bovine } from '../pages';


const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path: "/admin/bovine",
        layout: AdminLayout,
        component: Bovine,
    },
];

export default routesAdmin;