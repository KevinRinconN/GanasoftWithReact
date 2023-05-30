import { BASE_API } from "../utils/constans";

export const getBovineApi = async () => {
    try {
        const url = `${BASE_API}/api/bovine`;
        // const params = {
        //     headers:{
        //         Authorization: `Bearer ${token}`
        //     },
        // };

        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}