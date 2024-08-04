"use client";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function HelpDesk(){
    return(
        <div className={"flex h-screen w-sc flex-col items-center justify-center"}>
            <Card className={"w-[400px]"}>
                <CardHeader>
                    <CardTitle>
                        Welcome Back !
                    </CardTitle>
                    <CardDescription>
                        Please add your credentials to login
                    </CardDescription>
                </CardHeader>
                <CardContent className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Email</Label>
                        <Input/>
                    </div>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Password</Label>
                        <Input/>
                    </div>
                    <Button className={"self-end px-0 h-4"} variant={"link"} size={"sm"}>
                        Show password
                    </Button>
                </CardContent>
                <CardFooter className={"justify-center"}>
                    <Button className={"w-[150px] gap-2"}>
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}