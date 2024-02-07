import {client} from "@/app/service/client";
import {Account, AppwriteException, ID} from "appwrite";
import {toast} from "sonner"
import {usePathname, useRouter} from "next/navigation";


export const Auth = () => {
    return {
        createAccount: (email: string, password: string, confirmPassword: string) => {
            if (email === "" || password === "") {
                toast.error(
                    "Invalid Data",
                    {
                        description: "please make sure you have entered correct data",
                        action: {
                            label: "Retry",
                            onClick: () => console.log("undo")
                        }
                    }
                )
            } else if (password != confirmPassword) {
                toast.error(
                    "Password does not match",
                    {
                        description: "please check your both of the password fields",
                        action: {
                            label: "Retry",
                            onClick: () => console.log("undo")
                        }
                    }
                )
            } else if (!email.match(".com")) {
                toast.error(
                    "Invalid Email",
                    {
                        description: "please check your email",
                        action: {
                            label: "Retry",
                            onClick: () => console.log("undo")
                        }
                    }
                )
            } else {
                const account = new Account(client);

                try {
                    const promise = account.create(
                        ID.unique(),
                        email,
                        password
                    )
                    toast.promise(promise,
                        {
                            loading: "Creating Account",
                            success: (data) => {

                                return "Account Created Successfully"
                            },
                            error: error => {
                                return `${error}`
                            },
                        }
                    )
                } catch (error: any) {
                    toast.error(`${error}`);
                }
            }
        },

        loginEmail: async (email: string, password: string) => {
            if (email == "" || password == "") {
                toast.error(
                    "Invalid Data",
                    {
                        description: "please make sure you have entered correct data",
                        action: {
                            label: "Retry",
                            onClick: () => console.log("undo")
                        }
                    }
                )
            } else if (!email.match(".com")) {
                toast.error(
                    "Invalid Email",
                    {
                        description: "please make sure you have entered correct data",
                        action: {
                            label: "Retry",
                            onClick: () => console.log("undo")
                        }
                    }
                )
            } else {
                const account = new Account(client);

                try {
                    const promise = account.createEmailSession(
                        email,
                        password
                    )
                    toast.promise(promise,
                        {
                            loading: "Logging In.",
                            success: (data) => {
                                return "Logged in successfully."
                            },
                            error: error => {
                                return `${error}`
                            },
                        }
                    )
                    return promise;
                } catch (error: any) {
                    toast.error(`${error}`);
                }
            }
        }
    }
}