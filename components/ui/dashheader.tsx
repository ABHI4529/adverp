"use client";

import {CodeIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Dialog, DialogContent, DialogTrigger} from "./dialog";
import {Button, buttonVariants} from "./button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "./command";
import {Separator} from "@/components/ui/separator";
import {IoInformation, IoNotifications, IoSettings} from "react-icons/io5";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {FaFileInvoice} from "react-icons/fa";
import {useTheme} from "next-themes";
import {BsShop} from "react-icons/bs";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

export default function DashboardHeader() {

    const {setTheme} = useTheme();

    return (

        <header
            className="sticky top-0 flex px-3 border-b py-2 items-center justify-between w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CodeIcon className="h-6 w-6"></CodeIcon>
            <div className="flex gap-2">
                <Dialog>
                    <DialogTrigger>
                        <Button
                            className="w-[300px] justify-start text-slate-400 font-normal"
                            variant={"outline"}
                        >
                            Search (Alt + Q )
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                        <Command>
                            <CommandInput></CommandInput>
                            <CommandEmpty>Nothing Found</CommandEmpty>
                            <CommandGroup>
                                <CommandItem>Accounts</CommandItem>
                                <CommandItem>Masters</CommandItem>
                            </CommandGroup>
                        </Command>
                    </DialogContent>
                </Dialog>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button variant={"secondary"} size={"icon"}>
                            <IoInformation/>
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>

                    </HoverCardContent>
                </HoverCard>
                <Popover>
                    <PopoverTrigger>
                        <Button variant={"secondary"} size={"icon"}>
                            <IoNotifications></IoNotifications>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={"end"}>
                        <div className={"flex flex-col"}>
                            <div className={"flex justify-between"}>
                                <p className={"text-sm"}>Notification Center</p>
                            </div>
                            <div className={"flex flex-col gap-1 h-[100%] my-2"}>
                                <div className={"flex flex-col p-2 duration-200 gap-1  rounded-md hover:bg-secondary"}>
                                    <div className={"flex gap-2"}>
                                        <FaFileInvoice></FaFileInvoice>
                                        <p className={"text-sm"}>New Invoice</p>
                                    </div>
                                    <p className={"text-xs text-slate-400"}>New Purchase invoice received from <strong>Amar
                                        Agro</strong></p>
                                </div>
                                <Separator></Separator>
                            </div>
                            <div className={"flex justify-end"}>
                                <Button className={"p-0 h-3"} variant={"link"} size={"sm"}>
                                    Show More
                                </Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
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
            </div>
        </header>
    );
}
