import { LoginAdmin } from "../../pages";
import { useAuth } from "../../hooks";
import { TopMenu } from "../../Components/Admin";

export const AdminLayout = ({children}) => {
   
    const {auth} = useAuth();

    if (!auth) return <LoginAdmin/>
    
    return (
        <>
            <TopMenu/>
            {children}
        </>
    )
}