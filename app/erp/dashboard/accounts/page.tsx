"use client";

import {Button} from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    DotsVerticalIcon,
    DropdownMenuIcon,
    PlusIcon,
} from "@radix-ui/react-icons";
import {Separator} from "@radix-ui/react-menubar";
import {
    BiExport,
    BiLogoWhatsapp,
    BiMailSend,
    BiPlus,
    BiPrinter,
    BiSolidPrinter,
    BiTable,
} from "react-icons/bi";
import {Popover, PopoverContent} from "@/components/ui/popover";
import {PopoverTrigger} from "@radix-ui/react-popover";
import {GoTable} from "react-icons/go";
import {Checkbox} from "@/components/ui/checkbox";
import {useRouter} from "next/navigation";
import {Table, TableHead, TableHeader} from "@/components/ui/table";
import {DataTable} from "@/app/erp/dashboard/accounts/data-table";
import {columns} from "@/app/erp/dashboard/accounts/columns";

const account = [
    {
        accountName: "Abhinav Gadekar",
        opBal: "450",
    },
    {
        accountName: "Prashant Gadekar",
        opBal: "850",
    },
];

export default function AccountsDashboard() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-[100%] h-[100%]" onKeyDown={(e) => {
            if (e.key === "F2") {
                router.push("accounts/creation")
            }
        }}>
            <div className="flex p-3 py-2 border-b w-[100%] justify-between items-center">
                <p className={"page-header"}>Accounts</p>
                <div className="flex gap-2">
                    <Button
                        className="items-center gap-2 w-[150px]"
                        autoFocus
                        variant={"default"}
                        asChild={false}
                        onClick={() => {
                            router.push("accounts/creation")
                        }}
                    >
                        Create Account
                    </Button>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <DotsVerticalIcon></DotsVerticalIcon>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>Cost Center</MenubarItem>
                                <MenubarItem>Envelops</MenubarItem>
                                <MenubarSeparator></MenubarSeparator>
                                <MenubarItem>Import
                                    <MenubarShortcut>.xls</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
            <div className="flex flex-col h-[100%] overflow-hidden">
                <div className={"page-transition h-full flex flex-col"}>
                    <DataTable columns={columns} data={[]}/>
                </div>
                <div className="toolbar flex w-[100%] flex-row py-2 gap-2 px-3 justify-between items-center border-t">
                    <div className="flex gap-2">
                        <Button size={"icon"} variant={"outline"}>
                            <BiSolidPrinter></BiSolidPrinter>
                        </Button>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <BiExport></BiExport>
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Export Excel
                                        <MenubarShortcut>.xls</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Export Pdf
                                        <MenubarShortcut>.pdf</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Export To Web
                                        <MenubarShortcut>.html</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <BiMailSend></BiMailSend>
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Cost Center</MenubarItem>
                                    <MenubarItem>Envelops</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <BiLogoWhatsapp></BiLogoWhatsapp>
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Cost Center</MenubarItem>
                                    <MenubarItem>Envelops</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <Popover>
                        <PopoverTrigger>
                            <Button size={"icon"} variant={"outline"}>
                                <GoTable></GoTable>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-1 w-[200px]" align="end">
                            <div className="flex flex-col gap-0.5">
                                <p className="text-xs text-slate-500 px-2 mb-1 pb-1 border-b">
                                    Filter Table
                                </p>
                                <div className="flex gap-2 px-2 items-center">
                                    <Checkbox/>
                                    <p className="text-sm">Particulars</p>
                                </div>
                                <div className="flex gap-2 px-2 items-center">
                                    <Checkbox/>
                                    <p className="text-sm">Opening Balance</p>
                                </div>
                                <div className="flex gap-2 px-2 items-center">
                                    <Checkbox/>
                                    <p className="text-sm">Village</p>
                                </div>
                                <div className="flex justify-end">
                                    <Button variant={"link"} className="px-2 h-6">
                                        Filter
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
