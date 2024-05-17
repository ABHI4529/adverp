"use client";

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {ChevronDownIcon, GridIcon, ListBulletIcon, MoonIcon, PlusIcon, SunIcon} from "@radix-ui/react-icons";
import {GoBell, GoCloud, GoWorkflow} from "react-icons/go";
import {Dialog, DialogHeader} from "@/components/ui/dialog";
import {
    DialogContent,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";
import CompanyCreation from "./creation/creation";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Toaster} from "@/components/ui/sonner";
import {CompanyCard} from "@/components/ui/company-card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {AiOutlineEdit, AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {HiLogout} from "react-icons/hi";
import {IoAdd, IoFilter} from "react-icons/io5";
import {StorageService} from "@/utils/local-storage-service";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Models} from "appwrite";
import format from "date-fns/format";
import Loading from "@/app/loading";

export default function Company() {
    const [defLayout, setDefLayout] = useState<string>("grid");
    const [companies, setCompanies] = useState<any>()
    const [loading, setLoading] = useState(true);
    const {setTheme} = useTheme();
    const navigation = useRouter();
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    function getCompanies() {
        const userId = localStorage.getItem("userId");

        if (userId != null) {
            const promise = fetch("/api/fetch-companies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: userId})
            })

            promise.then(async (response) => {
                const d = await response.json();
                setLoading(false);
                setCompanies(d.companies);
            })
        } else {
            toast.error("User Not Found !")
        }
    }

    useEffect(() => {
        getCompanies();
    }, []);


    return (
        <div className="flex flex-col">
            <header
                className="sticky top-0 flex px-[4%] items-center justify-between z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex py-4 items-center gap-2">
                    <GoCloud className="h-6 w-6"></GoCloud>
                    <p>AdvCloud</p>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="outline">Feedback</Button>
                    <Button variant="ghost">Changelog</Button>
                    <Button variant="ghost">Help</Button>
                    <Button variant="ghost">Docs</Button>
                    <Button variant="secondary" size="icon">
                        <GoBell></GoBell>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"secondary"} size="icon">
                                <SunIcon
                                    className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                <MoonIcon
                                    className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Popover>
                        <PopoverTrigger>
                            <Button variant={"secondary"} size={"icon"}>
                                <AiOutlineUser/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align={"end"} className={"p-4 w-[400px]"}>
                            <div className={"flex flex-col gap-1"}>
                                <CardHeader className={"p-0"}>
                                    <div className={"flex justify-between"}>
                                        <div className={"flex flex-col gap-1"}>
                                            <CardTitle className={"justify-"}>
                                                Account Info
                                            </CardTitle>
                                            <CardDescription>
                                                Invite your team members to collaborate.
                                            </CardDescription>
                                        </div>
                                        <Button variant={"outline"} size={"icon"}>
                                            <IoAdd></IoAdd>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <div className={"flex gap-2 mt-4 items-center"}>
                                    <Avatar>
                                        <AvatarImage src={"https://ui.shadcn.com/avatars/02.png"}></AvatarImage>
                                    </Avatar>
                                    <div className={"flex flex-col w-[100%]"}>
                                        <p className={"text-sm font-medium"}>Abhinav Gadekar</p>
                                        <p className={"text-sm text-muted-foreground"}>abhinavgadekar4529@gmail.com</p>
                                    </div>
                                    <div className={"flex justify-end h-[40px] items-end"}>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Button variant={"ghost"} className={"h-6 p-1 gap-2"}>
                                                    <p className={"text-xs font-medium text-muted-foreground"}>
                                                        Owner
                                                    </p>
                                                    <ChevronDownIcon/>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align={"start"}>
                                                <DropdownMenuItem className={"justify-between"}>
                                                    Edit
                                                    <AiOutlineEdit/>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className={"justify-between"}
                                                    onClick={() => {
                                                        const promise = () => new Promise((resolve) => setTimeout(() => {
                                                                StorageService().clearLocalStorage();
                                                                resolve("Logged Out");
                                                            }, 2000
                                                        ));
                                                        toast.promise(
                                                            promise,
                                                            {
                                                                loading: "Logging Out",
                                                                success: (data) => {
                                                                    navigation.push("/");
                                                                    return `Logged Out`;
                                                                },
                                                                error: (data) => {
                                                                    return 'user not found'
                                                                }
                                                            }
                                                        )
                                                    }}
                                                >
                                                    Logout
                                                    <HiLogout/>
                                                </DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </header>
            {loading ?
                <div className={"flex flex-col items-center justify-center h-full w-full"}>
                    <Loading/>
                </div> :
                <div
                    className="sticky top-0 flex px-[8%] pt-6 gap-2 pb-2 items-center justify-between z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <Input placeholder="Search...( Alt + Q )"></Input>
                    <ToggleGroup
                        className="border rounded-md h-8"
                        type="single"
                        value={defLayout}
                        onValueChange={(value) => {
                            if (value) {
                                setDefLayout(value)
                            }
                        }}
                    >
                        <ToggleGroupItem
                            className="h-8"
                            value={"grid"}
                        >
                            <GridIcon></GridIcon>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            className="h-8"
                            value="list"
                        >
                            <ListBulletIcon></ListBulletIcon>
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <Button variant={"outline"}>
                        <IoFilter/>
                    </Button>
                    <Dialog
                        open={openDialog}
                        onOpenChange={setOpenDialog}
                    >
                        <DialogTrigger>
                            <Button>
                                Add New
                                <PlusIcon className="ml-2"></PlusIcon>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create Company</DialogTitle>
                                <DialogDescription>
                                    Get started and manage your finances.
                                </DialogDescription>
                                <CompanyCreation
                                    closeDialog={() => {
                                        setOpenDialog(false);
                                    }}
                                ></CompanyCreation>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>}
            {
                defLayout === "grid" ? (
                    <div className="grid px-[8%] w-[100%] grid-cols-3 p-4 gap-4">
                        {
                            companies?.map((data: any) => {
                                return <CompanyCard
                                    companyName={data['company_name']}
                                    companyId={data['company_id']}
                                    onDelete={(value) => {

                                    }}
                                    financialYear={
                                        `${format(new Date(data['book_begins']), "yyyy")}`
                                        + " - " +
                                        `${format(new Date(data['book_ends']), "yyyy")}`
                                    }
                                    companyLogoUrl={"https://vercel.com/api/www/avatar?u=abhi4529&s=44"}
                                    totalSale={"0"}
                                    lastWorked={format(new Date(), "dd - MM - yy")}
                                />
                            })
                        }
                    </div>

                ) : (
                    <div className={"flex flex-col px-[8%] w-[100%] p-4 gap-4"}>
                        {
                            companies?.map((data: any) => {
                                return <CompanyCard
                                    companyName={data['company_name']}
                                    style={"list"}
                                    companyId={data['company_id']}
                                    onDelete={(value) => {
                                    }}
                                    financialYear={
                                        `${format(new Date(data['book_begins']), "yyyy")}`
                                        + " - " +
                                        `${format(new Date(data['book_ends']), "yyyy")}`
                                    }
                                    companyLogoUrl={"https://vercel.com/api/www/avatar?u=abhi4529&s=44"}
                                    totalSale={"0"}
                                    lastWorked={format(new Date(), "dd - MM - yy")}
                                />
                            })
                        }
                    </div>
                )
            }
            <Toaster></Toaster>
        </div>
    );
}


