import {toast} from "sonner";


export const StorageService = () => {
    return {
        saveToLocalStorage: (key: string, data: any) => {
            try {
                const jsonData = JSON.stringify(data);
                localStorage.setItem(key, jsonData);
            } catch (e) {
                toast.error(`${e}`);
            }
        },

        readFromLocalStorage: (key: string): any | null => {
            try{
                const jsonData = localStorage.getItem(key);
                if(jsonData === null){
                    return null;
                }
                return JSON.parse(jsonData);
            }catch (e){
                toast.error('Something went wrong');
            }
        },
        clearLocalStorage: () => {
            try{
                localStorage.clear();
            }catch (e){
                toast.error('Something went wrong');
            }
        }
    }
}