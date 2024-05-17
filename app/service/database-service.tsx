import axios from 'axios';
import {CompanyInterface} from "@/utils/interfaces/company-interface";
import {toast} from "sonner";


export const DatabaseService = () => {
    return{
        createCompany : (company : CompanyInterface) => {
            const promise = axios.post(
                "/api/create-company",
                company
            )

            toast.promise(
                promise,
                {
                    loading : "Creating Company",
                    success : "Company Created Successfully",
                    error : (e) => {
                        return `${e}`
                    }
                }
            )
        }
    }
}