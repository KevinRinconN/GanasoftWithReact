import { HeaderAdmin } from "../../../Components/Admin";
import { BovineTable } from "./Partials";
import { getBovineApi } from "../../../api/bovine";
import { useEffect, useState } from "react";
export const Bovine = () => {

    const [dataset, setDataset] = useState([]);

    useEffect(()=> {
        getApi()
        
    },[])

    const getApi = async () => {
        const response = await getBovineApi();
        setDataset(await response)
    }

    return (
        <>
            <HeaderAdmin>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight flex-auto">
                    Bovino
                </h2>
            </HeaderAdmin>
            <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
                <BovineTable dataset={dataset}/>
            </div>
        </>
    )
}