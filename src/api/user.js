import { BASE_API } from "../utils/constans";

export const loginApi = async (formValue) => {
    try {
        const url = `${BASE_API}/api/auth/token/`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        const response = await fetch(url,params);

        if(response.status !== 200){
            throw new Error('Usuario o contraseña incorrecta');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        
    }
}

export const getMeApi = async (token) => {
    try {
        const url = `${BASE_API}/api/auth/me`;
        const params = {
            headers:{
                Authorization: `Bearer ${token}`
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}