import {CompanyInterface} from "@/utils/interfaces/company-interface";
import {Databases} from "appwrite";
import {client} from "@/app/service/client";
import {ID} from "appwrite";
import {toast} from "sonner";

const DatabaseService = () => {
    const databaseId: string = "65c0cc1feb9ae3113c2a";
    const companyCollectionId: string = "65c0cc3e454e4e162672";
    const usersCollectionId: string = "65c0cc3339d50081d76e";
    const database = new Databases(client);


    return {
        fetchCompanies: (userId: string): any | null => {

        },
        createCompany: (companyData: CompanyInterface) => {
            try {
                const promise = database.createDocument(
                    databaseId, companyCollectionId,
                    ID.unique(),
                    companyData
                );
                toast.promise(
                    promise,
                    {
                        loading: "Creating Company",
                        success: data => {
                            return "Company Created Successfully";
                        },
                        error: error => {
                            return `${error}`;
                        }
                    }
                )
            } catch (e) {
                toast.error(`${e}`);
            }
        }
    }
}