"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Separator } from "@radix-ui/react-menubar";
import {
  BiEdit,
  BiExport,
  BiLogoWhatsapp,
  BiMailSend,
  BiPlus,
  BiPrinter,
  BiSolidPrinter,
  BiTable,
} from "react-icons/bi";
import { AccountCreation } from "../accounts/creation/creation";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { GoTable } from "react-icons/go";
import { Checkbox } from "@/components/ui/checkbox";
import {
  IoDocumentAttach,
  IoDocumentTextOutline,
  IoReceipt,
} from "react-icons/io5";
import { HiDocumentAdd } from "react-icons/hi";
import { MdEdit, MdPayment } from "react-icons/md";
import { CiExport, CiMemoPad } from "react-icons/ci";
import { BsJournalCheck, BsPrinter } from "react-icons/bs";
import { ImBoxAdd, ImBoxRemove } from "react-icons/im";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const invoiceTypes = [
  {
    type: "Sale",
    icon: <IoDocumentTextOutline />,
  },
  {
    type: "Purchase",
    icon: <HiDocumentAdd />,
  },
  {
    type: "Receipt",
    icon: <IoReceipt />,
  },
  {
    type: "Payment",
    icon: <MdPayment />,
  },
  {
    type: "Credit Note",
    icon: <ImBoxAdd />,
  },
  {
    type: "Debit Note",
    icon: <ImBoxRemove />,
  },
  {
    type: "Delivery Memo",
    icon: <CiMemoPad />,
  },
  {
    type: "Receipt Memo",
    icon: <CiMemoPad />,
  },
  {
    type: "Journal",
    icon: <BsJournalCheck />,
  },
];

export default function AccountsDashboard() {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className="flex p-3 py-2 border-b w-[100%] justify-between items-center">
        <p>Invoicing</p>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger>
              <Button
                className="items-center gap-2 w-[150px]"
                variant={"default"}
              >
                Create Invoice
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-1 w-[250px]">
              <div className="flex flex-col">
                {invoiceTypes.map((type) => (
                  <Link href={"/erp/dashboard/invoicing/" + type.type.toLowerCase()} className={cn(
                    buttonVariants({variant:"ghost"}) + " justify-start gap-2"
                  )}>
                    {type.icon}
                    {type.type}
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <DotsVerticalIcon></DotsVerticalIcon>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Cost Center</MenubarItem>
                <MenubarItem>Envelops</MenubarItem>
                <MenubarSeparator></MenubarSeparator>
                <MenubarItem>
                  Import
                  <MenubarShortcut>.xls</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="flex flex-col gap-2 m-2 h-[100%]">
        <Card>
          <CardHeader className="pt-3 pb-2 px-3">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex flex-col">
                <p>Abhinav Gadekar</p>
                <p className="text-xs italic">
                  Nagpur, +919767426310, abhinavgadekar4529@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-0 justify-end">
                <CardDescription className="text-[12px] text-right">
                  01-04-2024
                </CardDescription>
                <CardTitle className="text-sm">Sale M4526</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-3 px-3 mt-2">
            <div className="flex justify-between">
              <div className="flex border rounded-md">
                <Button variant={"ghost"} size={"icon"}>
                  <MdEdit></MdEdit>
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <BsPrinter></BsPrinter>
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <BiExport></BiExport>
                </Button>
              </div>
              <div className="border-t pt-2 w-[40%]">
                <p className="text-right font-semibold">4500.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-[100%] flex-row py-2 gap-2 px-3 justify-between items-center border-t">
        <div className="flex gap-2">
          <Button size={"icon"} variant={"outline"}>
            <BiSolidPrinter></BiSolidPrinter>
          </Button>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <BiExport></BiExport>
              </MenubarTrigger>
              <MenubarContent align="end">
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
              <MenubarContent align="end">
                <MenubarItem>Cost Center</MenubarItem>
                <MenubarItem>Envelops</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <BiLogoWhatsapp></BiLogoWhatsapp>
              </MenubarTrigger>
              <MenubarContent align="end">
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
                <Checkbox />
                <p className="text-sm">Particulars</p>
              </div>
              <div className="flex gap-2 px-2 items-center">
                <Checkbox />
                <p className="text-sm">Opening Balance</p>
              </div>
              <div className="flex gap-2 px-2 items-center">
                <Checkbox />
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
  );
}
