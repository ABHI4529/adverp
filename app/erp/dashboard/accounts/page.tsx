"use client";

import { Button } from "@/components/ui/button";
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
  BiExport,
  BiLogoWhatsapp,
  BiMailSend,
  BiPlus,
  BiPrinter,
  BiSolidPrinter,
  BiTable,
} from "react-icons/bi";
import { AccountCreation } from "./creation/creation";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { GoTable } from "react-icons/go";
import { Checkbox } from "@/components/ui/checkbox";

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
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className="flex p-3 py-2 border-b w-[100%] justify-between items-center">
        <p>Accounts</p>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger>
              <Button
                className="items-center gap-2 w-[150px]"
                variant={"default"}
                asChild={false}
              >
                Create Account
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[70%] max-w-[60%] py-4 ">
              <DialogTitle className="mt-2">Account Creation</DialogTitle>
              <AccountCreation></AccountCreation>
            </DialogContent>
          </Dialog>
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
      <div className="flex flex-col h-[100%]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={150}>
            <div className="flex flex-col">
              <p className="text-sm text-slate-700 px-3 py-2 font-semibold border-b">
                Particulars
              </p>
              {account.map((account) => (
                <p className="text-sm border-b px-3 py-2">
                  {account.accountName}
                </p>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle className="hover:border border-spacing-2"/>
          <ResizablePanel defaultSize={50}>
            <div className="flex flex-col">
              <p className="text-sm text-slate-700 px-3 py-2 border-b font-semibold">
                Opening balance
              </p>
              {account.map((account) => (
                <p className="text-sm border-b px-3 py-2">{account.opBal}</p>
              ))}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
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
    </div>
  );
}
