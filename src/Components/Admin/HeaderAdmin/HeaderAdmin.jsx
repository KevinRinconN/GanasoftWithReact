export const HeaderAdmin = ({children}) => {
    return (
        <>
            <header className="bg-white shadow" v-if="$slots.header">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </header>  
        </>
    )
}