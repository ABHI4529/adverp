import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBottomRightIcon, ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { BiAtom, BiCard, BiDollar } from "react-icons/bi";

const shortcuts = [
  "Sales Invoice",
  "Purchase Invoice",
  "Delivery Memo",
  "Balance Sheet",
  "Profit & Loss",
  "GST Reports",
];

export default function HomeDashboard() {
  return (
    <div className="flex bg-blue flex-col">
      <div className="flex p-3 border-b justify-between">
        <h1>Home</h1>
      </div>
      <div className="flex flex-col p-3 gap-3">
        <div className="mx-auto w-[100%] flex items-center gap-2">
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                Total Revenue
                <BiDollar className="text-slate-500"></BiDollar>
              </CardTitle>
              <p className="text-2xl font-bold">$ 4500.00</p>
              <CardDescription className="text-xs">
                Less than 4% than yesterday
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                Sales
                <BiCard className="text-slate-500"></BiCard>
              </CardTitle>
              <p className="text-2xl font-bold">$ 4500.00</p>
              <CardDescription className="text-xs">
                Less than 4% than yesterday
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                Closing Balance
                <BiAtom className="text-slate-500"></BiAtom>
              </CardTitle>
              <p className="text-2xl font-bold">$ 4500.00</p>
              <CardDescription className="text-xs">
                Less than 4% than yesterday
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Card className="w-[100%]">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm">
              Your Shortcuts
            </CardTitle>
            <CardContent className="p-0 pt-3">
              <div className="flex flex-wrap gap-3">
                {shortcuts.map((shortcut) => (
                  <Link href={"/"}>
                    <div className="flex gap-2 items-center hover:border-b">
                      <p className="text-[13px] font-semibold">{shortcut}</p>
                      <ArrowTopRightIcon className="text-slate-500"></ArrowTopRightIcon>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
