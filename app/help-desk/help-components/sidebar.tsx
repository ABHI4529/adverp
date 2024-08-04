"use client";

import {IoHome, IoPeople, IoToday} from "react-icons/io5";
import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";

export default function Sidebar(){
    const items = [
        {
            label : "Home",
            icon : <IoHome/>,
            route : "home"
        },
        {
            label : "Clients",
            icon : <IoPeople/>,
            route : "clients"
        },
        {
            label : "Tasks",
            icon : <IoToday/>,
            route : "tasks"
        }
    ]

    return(
        <div className={"flex flex-col w-[25%] border-r p-3"}>
            <div className={"flex p-3 items-center gap-3 bg-secondary rounded-md"}>
                <Avatar className={"bg-primary items-center justify-center"}>
                    <p className={"text-white"}>A</p>
                </Avatar>
                <div className={"flex flex-col"}>
                    <h1 className={"text-xl"}>AdvCloud</h1>
                    <p className={"text-sm"}>Help Desk</p>
                </div>
            </div>
            <div className={"flex flex-col mt-8"}>
                {
                    items.map(e => (
                        <Button variant={"ghost"} className={"justify-start gap-2"}>
                            {e.icon}
                            {e.label}
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}