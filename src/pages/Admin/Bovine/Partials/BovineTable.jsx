export const BovineTable = ({dataset}) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
    
                <table className="w-full text-sm text-left text-gray-500 table-auto">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Rasgo distintivo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Raza
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sexo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de nacimiento
                            </th>
                            <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Acciones</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataset.map((item) => {
                            <tr 
                                className="group/item border-b border-gray-200 hover:bg-gray-100"
                            >
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap group-hover/item:bg-indigo-100 bg-white">
                                    { item.distinctiveTrait } 
                                </th>
                                <td className="px-6 py-4 group-hover/item:bg-indigo-100 bg-white">
                                    { item.breed }
                                </td>
                                <td className="px-6 py-4 group-hover/item:bg-indigo-100 bg-white">
                                    { item.is_female }
                                    
                                </td>
                                <td className="px-6 py-4 group-hover/item:bg-indigo-100 bg-white">
                                    { item.dateOfBirth }
                                
                                </td>
                                <td className="px-6 py-2 w-56 group-hover/item:bg-indigo-100 bg-white">
                                </td>
                            </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}