"use client";

import {
  CaretLeftIcon,
  CaretRightIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "./avatar";
import { Button, buttonVariants } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiOutlineDocument,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { BiHome } from "react-icons/bi";
import { BsBoxes, BsInboxesFill, BsPeople } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { useState } from "react";
import { IoDocumentAttach, IoHome, IoPeople } from "react-icons/io5";

export function SideBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const path = usePathname();

  return (
    <div
      className={
        openMenu
          ? "flex flex-col w-[25%] border-r duration-200"
          : "flex flex-col w-[60px] border-r duration-200"
      }
    >
      {openMenu ? (
        <div
          className={
            "flex rounded-md duration-200 gap-3 items-center p-2 m-3 hover:bg-primary/10"
          }
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Copilot-Teams.png"></AvatarImage>
          </Avatar>
          <div className="flex flex-col w-[100%] overflow-hidden">
            <h2 className="font-bold text-sm whitespace-nowrap">
              Advance Software Inc.
            </h2>
            <p className="text-slate-600 text-xs whitespace-nowrap">
              Abhinav Gadekar
            </p>
          </div>
          <ChevronRightIcon></ChevronRightIcon>
        </div>
      ) : (
        <div className="flex flex-col items-center m-3">
          <Link
            href={"/erp/company"}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Copilot-Teams.png"></AvatarImage>
            </Avatar>
          </Link>
        </div>
      )}
      {openMenu ? (
        <div className="flex flex-col p-3 gap-1 h-[100%]">
          <Link
            href={"/erp/dashboard/home"}
            className={
              path.match("home")
                ? cn(
                    buttonVariants({ variant: "secondary" }) +
                      " justify-start gap-2"
                  )
                : cn(
                    buttonVariants({ variant: "ghost" }) +
                      " justify-start gap-2"
                  )
            }
          >
            <IoHome></IoHome>
            Home
          </Link>
          <Link
            href={"/erp/dashboard/accounts"}
            className={
              path.match("accounts")
                ? cn(
                    buttonVariants({ variant: "secondary" }) +
                      " justify-start gap-2"
                  )
                : cn(
                    buttonVariants({ variant: "ghost" }) +
                      " justify-start gap-2"
                  )
            }
          >
            <IoPeople></IoPeople>
            Accounts & Cost Center
          </Link>
          <Link
            href={"/erp/dashboard/stock"}
            className={
              path.match("stock")
                ? cn(
                    buttonVariants({ variant: "secondary" }) +
                      " justify-start gap-2"
                  )
                : cn(
                    buttonVariants({ variant: "ghost" }) +
                      " justify-start gap-2"
                  )
            }
          >
            <BsInboxesFill></BsInboxesFill>
            Items & Stock
          </Link>
          <p className="text-xs mt-4">Invoicing</p>
          <Separator></Separator>
          <Link
            href={"/erp/dashboard/invoicing"}
            className={
              path.match("invoicing")
                ? cn(
                    buttonVariants({ variant: "secondary" }) +
                      " justify-start gap-2"
                  )
                : cn(
                    buttonVariants({ variant: "ghost" }) +
                      " justify-start gap-2"
                  )
            }
          >
            <IoDocumentAttach></IoDocumentAttach>
            Invoicing
          </Link>
          <p className="text-xs mt-4">Reports</p>
          <Separator></Separator>
          <Link
            href={"dashboard/home"}
            className={cn(
              buttonVariants({ variant: "ghost" }) + " justify-between"
            )}
          >
            Balance Sheet
          </Link>
        </div>
      ) : (
        <div className="flex flex-col p-3 gap-1 h-[100%] mt-8">
          <Link
            href={"/erp/dashboard/home"}
            className={
              path.match("home")
                ? cn(buttonVariants({ variant: "secondary", size: "icon" }))
                : cn(buttonVariants({ variant: "ghost", size: "icon" }))
            }
          >
            <IoHome></IoHome>
          </Link>
          <Link
            href={"/erp/dashboard/accounts"}
            className={
              path.match("accounts")
                ? cn(buttonVariants({ variant: "secondary", size: "icon" }))
                : cn(buttonVariants({ variant: "ghost", size: "icon" }))
            }
          >
            <IoPeople></IoPeople>
          </Link>
          <Link
            href={"/erp/dashboard/stock"}
            className={
              path.match("stock")
                ? cn(buttonVariants({ variant: "secondary", size: "icon" }))
                : cn(buttonVariants({ variant: "ghost", size: "icon" }))
            }
          >
            <BsInboxesFill></BsInboxesFill>
          </Link>
          <Separator></Separator>
          <Link
            href={"/erp/dashboard/invoicing"}
            className={
              path.match("invoicing")
                ? cn(buttonVariants({ variant: "secondary", size: "icon" }))
                : cn(buttonVariants({ variant: "ghost", size: "icon" }))
            }
          >
            <IoDocumentAttach></IoDocumentAttach>
          </Link>
          <Separator></Separator>
          <Link
            href={"dashboard/home"}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          ></Link>
        </div>
      )}
      <div className="flex justify-end w-[100%] p-3">
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {
            <CaretLeftIcon
              className={
                openMenu ? "rotate-180 duration-200" : "rotate-0 duration-200"
              }
            ></CaretLeftIcon>
          }
        </Button>
      </div>
    </div>
  );
}
