import React from 'react';// Replace 'your-component-library' with the actual library you are using
import {GoWorkflow} from 'react-icons/go';
import {BiDollar} from 'react-icons/bi';
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

interface CompanyCardProps {
    companyName?: string;
    financialYear?: string;
    lastWorked?: string;
    totalSale?: string;
    companyLogoUrl?: string;
    style?: string;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
                                                            companyName,
                                                            financialYear,
                                                            lastWorked,
                                                            totalSale,
                                                            companyLogoUrl,
                                                            style = "card"
                                                        }) => {
    if (style === "card") {
        return (
            <Link href="/erp/dashboard">
                <Card className="duration-300 w-[100%] scale-100 hover:bg-primary/10">
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
            </Link>
        );
    }
    return (
        <Link href={"/erp/dashboard"}>
            <Card className="duration-300 w-[100%] scale-100 hover:bg-primary/10">
                <CardContent className={"flex gap-2 pt-4"}>
                    <div className="flex gap-2 items-center">
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                                src="https://vercel.com/api/www/avatar?u=abhi4529&s=44"></AvatarImage>
                        </Avatar>
                        <div className="flex flex-col gap-1 mt-2">
                            <CardTitle>Advance Software Inc.</CardTitle>
                            <CardDescription>2023 - 2024</CardDescription>
                        </div>
                    </div>
                    <div className="flex flex-col border-l pl-6 ml-6 gap-2">
                        <div className="flex gap-1 items-center">
                            <GoWorkflow></GoWorkflow>
                            <p className="text-slate-500 text-sm">14-12-2023</p>
                        </div>
                        <div className="flex  items-center">
                            <BiDollar></BiDollar>
                            <p className="text-slate-500 text-sm">16500.20</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
