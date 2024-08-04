import axios from 'axios';
import {CompanyInterface} from "@/utils/interfaces/company-interface";
import {toast} from "sonner";
import {AccountType} from "@/app/types/account-type";


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
        },
        createAccount : (account : AccountType, {onSuccess} : {onSuccess: () => void}) => {
            const promise = axios.post(
                "/api/accounts/create-account",
                account
            )

            toast.promise(
                promise,
                {
                    loading: "Saving Account",
                    success: ()=>{
                        onSuccess();
                        return "Account Saved !";
                    },
                    error: (e) => {
                        return `${e}`
                    }
                }
            )
        },
    }
}