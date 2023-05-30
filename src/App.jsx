import { Navigation } from "./routes"
import { AuthProvider } from "./context"
import './index.css'
export const App = () => {
    return (
        <>
            <AuthProvider>
                <Navigation/>
            </AuthProvider>
            
        </>
    )
}