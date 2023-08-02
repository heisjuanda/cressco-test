import { URL_API_RANDOM } from "./constants";

export const apiCall = async () => {    
    try {
        const res = await fetch(URL_API_RANDOM);
        const data = await res.json();
        return data;
    } catch (e) {
        return e;
    }
};