import { useAuth } from "../../../hooks"

export const TopMenu = () => {

    const { auth, logout } = useAuth();

    const renderName = () => {
        if (auth.me?.first_name && auth.me?.last_name){
            return `${auth.me.first_name} ${auth.me.last_name}`
        }
        return auth.me?.email
    }

    return (
    <header class="bg-white shadow" v-if="$slots.header">
        <div class="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-4xl text-gray-800 leading-tight">Wallet Ucc</h2>
            <div className="flex gap-4 justify-center">
                <div className="flex justify-center items-center">
                    <span className="text-base">{renderName()}</span>
                </div>
                <div className="flex justify-center items-center w-12 text-gray-100 p-1 bg-indigo-500 rounded-md">
                    <span class="material-symbols-outlined ">
                        logout
                    </span>
                </div>
                
            </div>
            
        </div>
      </header>
    )
}