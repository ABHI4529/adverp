"use client";

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Toaster} from "@/components/ui/sonner";
import {SignUpCard} from "@/app/erp/signup_login/signup";
import {LoginCard} from "@/app/erp/signup_login/login";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {StorageService} from "@/utils/local-storage-service";


export default function Page() {
    const [activeTab, setActiveTab] = useState<string>("signup")

    return (
        <div className={"flex flex-col justify-center items-center h-screen"}>
            <Tabs value={activeTab}>
                <TabsContent value={"signup"}>
                    <SignUpCard/>
                </TabsContent>
                <TabsContent value={"login"}>
                    <LoginCard/>
                </TabsContent>
            </Tabs>
            {
                activeTab == "signup" ? <div className={"fixed flex bottom-4 items-center"}>
                    <p className={"text-sm"}>Already have an account ?</p>
                    <Button variant={'link'} className={"h-2 text-sm px-1"}
                            onClick={() => {
                                setActiveTab("login")
                            }}
                    >Login Now</Button>
                </div> : <div className={"fixed flex bottom-4 items-center"}>
                    <p className={"text-sm"}>Don't have an account yet ?</p>
                    <Button variant={'link'} className={"h-2 text-sm px-1"}
                            onClick={() => {
                                setActiveTab("signup")
                            }}
                    >Sign Up</Button>
                </div>
            }
            <Toaster></Toaster>
        </div>
    )
}