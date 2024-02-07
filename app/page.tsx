"use client";

import Link from 'next/link'
import {Button, buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {StorageService} from "@/utils/local-storage-service";
import {toast} from "sonner";
import {Toaster} from "@/components/ui/sonner";
import {useRouter} from "next/navigation";

export default function Home() {

    const navigation = useRouter();

    function checkUser() {
        const promise = () => new Promise((resolve) => setTimeout(() => {
                const user = StorageService().readFromLocalStorage("user");
                if (user != null) {

                    return navigation.push("/erp/company");
                } else {
                    navigation.push("/erp/signup_login")
                    return resolve("Completed");
                }
            }, 2000
        ))

        toast.promise(
            promise,
            {
                loading: "Processing",
                success: (data) => {
                    return `${data}`;
                },
                error: (data) => {
                    return 'user not found'
                }
            }
        )
    }

    return (
        <main className="flex flex-col">
            <header>
                <div className={"flex px-[4%] justify-between py-2 border-b items-center"}>
                    <div className={"flex w-[150px]"}>
                        <p>AdvCloud</p>
                    </div>
                    <div className={"flex gap-2 p-1 border rounded-md h-9"}>
                        <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-7 w-[120px]")}>
                            Home
                        </Link>
                        <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-7 w-[120px]")}>
                            Products
                        </Link>
                        <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-7 w-[120px]")}>
                            About Us
                        </Link>
                        <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-7 w-[120px]")}>
                            Contact
                        </Link>
                    </div>
                    <div className={"flex justify-end w-[150px]"}>
                        <Button
                            className={"w-[150px]"}
                            onClick={checkUser}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </header>
            <div className={"flex flex-col justify-start px-[4%] py-56"}>
                <h1>The Next Gen ERP</h1>
                <h2 className={"text-5xl"}>
                    AdvCloud ERP
                </h2>
            </div>
            <Toaster/>
        </main>
    )
}
