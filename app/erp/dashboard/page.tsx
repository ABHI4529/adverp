"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarMenu,
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { SideBar } from "@/components/ui/sidebar";
import {
  ArrowTopRightIcon,
  CodeIcon,
  GearIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { BiData } from "react-icons/bi";
import HomeDashboard from "./home/page";
import { Suspense, useState } from "react";
import AccountsDashboard from "./accounts/page";
import { usePathname } from "next/navigation";
import StockDashboard from "./stock/page";
import Invoicing from "./invoicing/page";
import { ThemeProvider } from "@/utils/theme-provider";

export default function DefaultDashboard() {
  const path = usePathname();

  return (
    <div className="flex flex-col h-[100%] justify-center items-center">
      <h1 className="text-primary/80 text-4xl">AdvCloud ERP</h1>
      <p className="text-primary/60">
        Start managing your business with the Next Gen Technology
      </p>
      <div className="flex flex-wrap gap-2 mt-8 w-[60%] justify-center items-center]">
        <Button variant={"link"} className="items-center gap-2">
          Watch Tutorial
        </Button>
        <Button variant={"link"} className="items-center gap-2">
          Create First Invoice
        </Button>
        <Button variant={"link"} className="items-center gap-2">
          Create Account
        </Button>
        <Button variant={"link"} className="items-center gap-2">
          Stock Item
        </Button>
        <Button variant={"link"} className="items-center gap-2">
          Sale Reports
        </Button>
      </div>
    </div>
  );
}
