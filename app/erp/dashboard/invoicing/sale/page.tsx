import { Button, buttonVariants } from "@/components/ui/button";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SaleInvoice() {
  return (
    <div className="flex flex-col">
      <div className="flex p-3 py-2 border-b w-[100%] items-center">
        <div className="flex gap-2 items-center">
          <Link href={"/erp/dashboard/invoicing"} className={buttonVariants({variant:"link"})}>Invoicing</Link>
          <CaretRightIcon></CaretRightIcon>
          <p className="text-sm px-3">Sale Invoice</p>
        </div>
      </div>
    </div>
  );
}
