import { LoginAdmin } from "../../pages";
import { useAuth } from "../../hooks";
import { TopMenu, SideBar } from "../../Components/Admin";
import { ItemNav } from "../../Components/ItemNav/ItemNav";
import { DropDown } from "../../Components/Admin/DropDown";

export const AdminLayout = ({children}) => {
   
    const {auth} = useAuth();

    if (!auth) return <LoginAdmin/>
    
    return (
        <>  
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">

                                <div className="hidden space-x-8 sm:-py-px sm:ml-10 sm:flex">
                                    <ItemNav
                                        href="/admin/bovine"
                                    >
                                        Bovino
                                    </ItemNav>
                                    <ItemNav
                                        href="/admin/tratament"
                                    >
                                        Tratamiento
                                    </ItemNav>
                                    <ItemNav
                                        href="/admin/stage"
                                    >
                                        Etapa
                                    </ItemNav>
                                </div>
                                
                            </div>
                            <div className="flex items-center ml-6">
                                <DropDown/>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>  
        </>
    )
}