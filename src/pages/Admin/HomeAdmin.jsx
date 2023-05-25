import { useAuth } from "../../hooks"

export const HomeAdmin = () => {
    const {logout} = useAuth();
    return(
        <>
        
            <div className="flex justify-between mx-auto max-w-5xl rounded-md">
                <h1>Home</h1>
                { <button 
                    className="p-2 bg-indigo-500 rounded-md text-gray-100"
                    onClick={logout}
                
                >
                    Log out
                </button> }
            </div>
        </>
    )
    
}