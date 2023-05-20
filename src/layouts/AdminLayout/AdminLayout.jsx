import { LoginAdmin } from "../../pages";

export const AdminLayout = ({children}) => {
    const auth = null;

    if (!auth) return <LoginAdmin/>
    
    return (
        <>
            <h1>AdminLayout</h1>
            {children}
        </>
    )
}