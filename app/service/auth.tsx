import {client} from "@/app/service/client";
import {Account, AppwriteException, ID} from "appwrite";
import {toast} from "sonner"
import {usePathname, useRouter} from "next/navigation";
import {UserType} from "@/app/types/user_type";
import {auth} from "@/app/service/firebase-service";
import {createUserWithEmailAndPassword} from "@firebase/auth";


export const Auth = () => {
    return {
        createAccount: (email: string, password: string, confirmPassword: string, onSuccess: () => void) => {
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

                try {
                    const promise = createUserWithEmailAndPassword(auth, email, password)
                    toast.message("Creating account...")
                    promise.then((data) => {
                        if (data != null) {
                            const user: UserType = {
                                id: data.user.uid,
                                name: data.user!.displayName!,
                                email: data.user.email!,
                                created_at: new Date()
                            }

                            const save = fetch("/api/create-user", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(user)
                            });

                            toast.promise(save, {
                                loading: "Creating account.",
                                success: (value) => {
                                    localStorage.setItem("userId", user.id);
                                    onSuccess();
                                    return "Account created successfully."
                                },
                                error: error => {
                                    return `${error}`
                                }
                            })
                        }
                    }).catch((e) => {
                        toast.error(`${e}`)
                    });
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