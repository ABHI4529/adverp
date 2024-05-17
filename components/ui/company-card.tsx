"use client";

import React from 'react';// Replace 'your-component-library' with the actual library you are using
import {GoWorkflow} from 'react-icons/go';
import {BiDollar} from 'react-icons/bi';
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuShortcut,
    ContextMenuTrigger
} from "@/components/ui/context-menu";
import {IoRemove} from "react-icons/io5";
import {AiFillDelete, AiOutlineEdit} from "react-icons/ai";
import {FiDelete} from "react-icons/fi";
import {DatabaseService} from "@/app/service/database-service";
import {useRouter} from "next/navigation";

interface CompanyCardProps {
    companyName?: string;
    financialYear?: string;
    lastWorked?: string;
    totalSale?: string;
    companyLogoUrl?: string;
    companyId: string,
    style?: string;
    onDelete : (data: any) => void
}

export const CompanyCard: React.FC<CompanyCardProps> =
    ({
         companyName,
         financialYear,
         lastWorked,
         totalSale,
         companyLogoUrl,
         companyId,
         style = "card",
     }) => {
        const router = useRouter();

        if (style === "card") {
            return (
                <ContextMenu>
                    <ContextMenuTrigger>
                        <Card className="duration-300 w-[100%] scale-100 hover:bg-primary/10"
                            onClick={()=>{
                                localStorage.setItem("companyId", companyId)
                                router.push(`/erp/dashboard`);
                            }}
                        >
                            <CardHeader>
                                <div className="flex gap-2 items-center ">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={companyLogoUrl}/>
                                    </Avatar>
                                    <div className="flex flex-col gap-1">
                                        <CardTitle>{companyName}</CardTitle>
                                        <CardDescription>{financialYear}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2">
                                    <div className="flex gap-1 items-center">
                                        <GoWorkflow/>
                                        <p className="text-slate-500 text-sm">{lastWorked}</p>
                                    </div>
                                    <div className="flex  items-center">
                                        <BiDollar/>
                                        <p className="text-slate-500 text-sm">{totalSale}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </ContextMenuTrigger>
                    <ContextMenuContent className={"w-[200px]"}>
                        <ContextMenuItem>
                            Edit
                            <ContextMenuShortcut>
                                <AiOutlineEdit/>
                            </ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                            onClick={() => {

                            }}
                        >
                            Delete
                            <ContextMenuShortcut>
                                <AiFillDelete/>
                            </ContextMenuShortcut>
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            );
        }
        return (
            <Link href={"/erp/dashboard"}>
                <Card className="duration-300 w-[100%] scale-100 hover:bg-primary/10">
                    <CardContent className={"flex gap-2 pt-4"}>
                        <div className="flex gap-2 items-center">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={companyLogoUrl}/>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <CardTitle>{companyName}</CardTitle>
                                <CardDescription>{financialYear}</CardDescription>
                            </div>
                        </div>
                        <div className="flex flex-col border-l pl-6 ml-6 gap-2">
                            <div className="flex gap-1 items-center">
                                <GoWorkflow/>
                                <p className="text-slate-500 text-sm">{lastWorked}</p>
                            </div>
                            <div className="flex  items-center">
                                <BiDollar/>
                                <p className="text-slate-500 text-sm">{totalSale}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    };
