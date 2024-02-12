import {CompanyInterface, minimalCompany} from "@/utils/interfaces/company-interface";
import {Databases, ID, Query} from "appwrite";
import {client} from "@/app/service/client";
import {toast} from "sonner";

export const DatabaseService = () => {
    const databaseId: string = "65c0cc1feb9ae3113c2a";
    const companyCollectionId: string = "65c0cc3e454e4e162672";
    const usersCollectionId: string = "65c0cc3339d50081d76e";
    const database = new Databases(client);


    return {
        fetchCompanies: async (userId: string) => {
           try{
               return database.listDocuments(
                   databaseId,
                   companyCollectionId,
                   [
                       Query.equal("user_id", userId)
                   ]
               );
           }catch (e){
               toast.error(
                   "Something went wrong"
               );
           }
        },

        createCompany: (companyData: minimalCompany, userId: string) => {

            const company: CompanyInterface = {
                "company_name": companyData.company_name,
                "company_id": `${companyData.company_name.substring(0, 1) + userId}`,
                "user_id": userId,
                "company_alt": companyData.company_alias,
                "book_begins": companyData.book_begins,
                "book_ends": companyData.book_ends,
                "admin_password": "",
                "data_freeze": "",
                "address": companyData.company_address,
                "city": '',
                "state": "",
                "primary_contact": companyData.company_contact,
                "secondary_contact": "",
                "emailId": companyData.company_email,
                "reg_type": companyData.company_type,
                "gstIn": companyData.company_gst,
                "panIn": companyData.company_pan,
                "jurisdiction": "",
                "enable_auto_cs_to_pl": false,
                "enable_add_cost_purchase": false,
                "enable_add_gst_cost_purchase": false,
                "enable_gst_validation": false,
                "enable_zero_value_entries": false,
                "enable_auto_gst_reduction": false,
                "enable_auto_voucher_day": false,
                "enable_auto_voucher_month": false,
                "enable_single_entry_mode": false,
                "enable_stop_sale_cExceeds": false,
                "enable_auto_receipt_generation": false,
                "enable_trash": false,
                "enable_ledger_allocations": false,
                "enable_user_tracking": false,
                "enable_invoice_tracking": false,
                "mail_provider": "",
                "access_token": "",
                "sms_provider": "",
                "api_endPoint": "",
                "api_key": ""
            }

            try {
                console.log(company);
                const promise = database.createDocument(
                    databaseId, companyCollectionId,
                    ID.unique(),
                    company
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
        },

        deleteCompany : async (companyId: string) => {
           try{
               const docId = database.listDocuments(
                   databaseId, companyCollectionId,[Query.equal("company_id", companyId)]
               )
               toast.promise(
                   docId, {
                       loading: "Processing",
                       success : (data) => {
                           try{
                               const companyDelete = database.deleteDocument(
                                   databaseId,
                                   companyCollectionId,
                                   data.documents[0].$id
                               )
                               toast.promise(
                                   companyDelete,
                                   {
                                       loading : "Deleting Company...",
                                       success : "Company Removed Successfully",
                                       error : "Something went wrong"
                                   }
                               )
                           }catch (e){
                               toast.error(`${e}`)
                           }
                           return "Company Found"
                       },
                       error : "No Such Company Exists"
                   }
               )
           }catch (e){
               toast.error(`${e}`)
           }
        },
    }
}