import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidSave } from "react-icons/bi";

import * as z from "zod";

export function AccountCreation() {
  return (
    <div className="flex flex-col h-[100%] justify-between">
      <div className="flex gap-2">
        <div className="flex flex-col w-[100%]">
          <Card>
            <CardContent className="flex flex-col w-[100%] h-[100%] justify-center p-3">
              <p className="text-slate-500 text-xs font-bold mb-2">
                Account Details
              </p>
              <AccountDetails></AccountDetails>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col w-[100%]">
          <Card>
            <CardContent className="flex w-[100%] flex-col h-[100%] justify-center p-3">
              <p className="text-slate-500 text-xs font-bold mb-2">
                Tax Details{" "}
              </p>
              <TaxDetails></TaxDetails>
            </CardContent>
          </Card>
          <AccountOptions></AccountOptions>
        </div>
      </div>
      <div className="flex justify-end gap-2 items-end mt-3">
        <div className="flex">
          <Button variant={"link"}>Search GST</Button>
          <Button variant={"link"}>Bank Details</Button>
          <Button variant={"link"}>
            More Details
          </Button>
        </div>
        <Button variant={"default"}>
          Save
          <BiSolidSave className="ml-2"></BiSolidSave>
        </Button>
      </div>
    </div>
  );
}

const accountSchema = z.object({
  accountName: z.string().min(3).max(50),
  accountGroup: z.string(),
  accountOpBal: z.number(),
  accountCategory: z.string(),
  address: z.string(),
  state: z.string(),
  city: z.string(),
  pincode: z.string(),
  route: z.string(),
  contact: z.string(),
  email: z.string(),
  regType: z.string(),
  gstIn: z.string(),
  panIn: z.string(),
  drugLic: z.string(),
  tdsApplicable: z.boolean(),
  eCom: z.boolean(),
  isTransporter: z.boolean(),
  shippingAddress: z.string(),
});

const accountGroups = [
  "Sundry Debtors",
  "Sundry Credtors",
  "Expenses",
  "Bank Account",
];

export function AccountDetails() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
  });

  function onSubmit(values: z.infer<typeof accountSchema>) {
    console.log(values);
  }

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="flex flex-col w-[100%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="accountName"
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Account Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Advance Software Inc..."
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountGroup"
            render={({ field }) => (
              <FormItem className="w-[100%] flex flex-col gap-0.5 justify-start">
                <FormLabel>Account Group</FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger className="h-8">
                      <div
                        className={cn(
                          buttonVariants({ variant: "outline" }) +
                            " w-[100%] justify-start font-normal text-sm"
                        )}
                      >
                        {field.value === "" ? "Select Group" : field.value}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="bottom" align="start">
                      <Command>
                        <CommandInput />
                        <CommandGroup>
                          {accountGroups.map((account) => (
                            <CommandItem
                              onSelect={(value) => {
                                field.onChange(capitalizeFirstLetter(value));
                                setOpen(false);
                              }}
                            >
                              {account}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <div className="flex gap-2 items-end">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Shop 40, At Post..." {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className={buttonVariants({ variant: "outline" })}>
                  <DotsVerticalIcon></DotsVerticalIcon>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Add Shipping Address</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="pincode"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>PinCode</FormLabel>
                  <FormControl>
                    <Input placeholder="440018" {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="route"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Route</FormLabel>
                  <FormControl>
                    <Input placeholder="Enz..." {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Maharashtra..." {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Nagpur..." {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="advance@gmail.com" {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="w-[50%] mb-2">
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="9XXXXXXXXX..." {...field}></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

const regTypes = ["Regular", "Composite", "Cancelled", "UnRegistered"];

export function TaxDetails() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
  });

  function onSubmit(values: z.infer<typeof accountSchema>) {
    console.log(values);
  }

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="regType"
            render={({ field }) => (
              <FormItem className="w-[200px] flex flex-col gap-0.5">
                <FormLabel>Registration Type</FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger className="h-8">
                      <div
                        className={cn(
                          buttonVariants({ variant: "outline" }) +
                            " w-[100%] justify-start font-normal text-sm"
                        )}
                      >
                        {field.value === "" ? "Select Group" : field.value}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                      <Command>
                        <CommandInput />
                        <CommandGroup>
                          {regTypes.map((type) => (
                            <CommandItem
                              onSelect={(value) => {
                                field.onChange(capitalizeFirstLetter(value));
                                setOpen(false);
                              }}
                            >
                              {type}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gstIn"
            render={({ field }) => (
              <FormItem className="w-[100%] mt-2">
                <FormLabel>GST Number</FormLabel>
                <FormControl>
                  <Input {...field}></Input>
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-2">
            <Button variant={"link"} className="p-0 h-3 mt-2">
              Add Licenses
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export function AccountOptions() {
  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
  });

  return (
    <div className="flex flex-col gap-2 mt-2 h-[100%]">
      <Card className="h-[100%]">
        <CardHeader className="p-3">
          <div className="flex justify-between items-center h-[100%]">
            <div className="flex flex-col gap-0.5">
              <CardTitle className="text-sm">Interest Calculations</CardTitle>
              <CardDescription>Apply interest to this ledger</CardDescription>
            </div>
            <Switch></Switch>
          </div>
        </CardHeader>
      </Card>
      <Card className="h-[100%]">
        <CardHeader className="p-3 h-[100%]">
          <div className="flex justify-between items-center h-[100%]">
            <div className="flex flex-col gap-0.5">
              <CardTitle className="text-sm">Stop Invoicing</CardTitle>
              <CardDescription>
                No invoicing will be applied to this account
              </CardDescription>
            </div>
            <Switch></Switch>
          </div>
        </CardHeader>
      </Card>
      <Card className="h-[100%]">
        <CardHeader className="p-3 h-[100%]">
          <div className="flex justify-between items-center h-[100%]">
            <div className="flex flex-col">
              <CardTitle className="text-sm">Transporter</CardTitle>
              <CardDescription>This account is a transporter</CardDescription>
            </div>
            <Switch></Switch>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
