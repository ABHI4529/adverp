"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import {Input} from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {Separator} from "@/components/ui/separator";
import {Switch} from "@/components/ui/switch";
import {cn} from "@/lib/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {CaretRightIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {BiSolidSave} from "react-icons/bi";

import * as z from "zod";
import {accountGroups} from "@/app/utils/account-groups";
import {useRouter} from "next/navigation";
import {accountSchema, addressSchema} from "@/app/form-schemas/account-schemas";
import {Combobox} from "@/components/ui/combobox";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {IoAdd} from "react-icons/io5";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {statesAndCodes} from "@/app/utils/address-states";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Address} from "@/app/types/account-type";
import {Label} from "@/components/ui/label";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";

export default function AccountCreation() {
    const router = useRouter();
    return (
        <div className={"flex h-full flex-col"}>
            <div className={"flex p-3 py-2 border-b w-[100%] justify-between items-center"}>
                <div className={"flex gap-2 items-center"}>
                    <Button variant={"link"} className={"page-header p-0"} onClick={() => router.back()}>
                        Accounts
                    </Button>
                    <CaretRightIcon className={"page-header animation-delay-50"}/>
                    <p className={"page-header animation-delay-100 text-sm"}>Account Creation</p>
                </div>
                <Button variant={"default"}>
                    Save
                    <BiSolidSave className="ml-2"></BiSolidSave>
                </Button>
            </div>
            <div className="page-transition overflow-hidden flex flex-col h-[100%] justify-between p-3">
                <div className="flex h-[100%] gap-2">
                    <AccountForm/>
                </div>
            </div>
        </div>
    );
}


function AccountForm() {
    6
    return (
        <div className={"flex gap-3 h-[100%] w-full"}>
            <Card className={"w-full"}>
                <CardHeader>
                    <CardDescription>
                        Account Details
                    </CardDescription>
                </CardHeader>
                <CardContent className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Account Name</Label>
                        <Input required/>
                    </div>
                    <div className={"flex flex-col gap-1.5 w-[60%]"}>
                        <Label>Account Group</Label>
                        <Combobox options={[...accountGroups]} selected={""}/>
                    </div>
                    <div className={"p-3 border rounded-lg flex flex-col  gap-1.5"}>
                        <Label>Op. balance</Label>
                        <div className={"flex gap-1"}>
                            <Input placeholder={"As On 01-04-2024"}/>
                            <ToggleGroup type={"single"} className={"border rounded-md h-8 px-[2px]"}>
                                <ToggleGroupItem value={"Db"} className={"h-7"}>
                                    Db
                                </ToggleGroupItem>
                                <ToggleGroupItem value={"Cr"} className={"h-7"}>
                                    Cr
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger className={"w-full"}>
                            <Button className={"w-full gap-3 font-normal justify-start"} variant={"outline"}>
                                <IoAdd/>
                                Add Address
                            </Button>
                        </DialogTrigger>
                        <AddressForm/>
                    </Dialog>
                </CardContent>
            </Card>
            <div className={"flex flex-col gap-3 w-full"}>
                <Card className={"w-full"}>
                    <CardHeader>
                        <CardDescription>
                            Tax Details
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={"flex flex-col gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Registration Type</Label>
                            <Combobox options={[
                                {
                                    label: "Regular",
                                    value: "regular"
                                },
                                {
                                    label: "UnRegistered",
                                    value: "unregistered"
                                },
                                {
                                    label: "Composition",
                                    value: "composition"
                                }

                            ]} selected={""}/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>GST Number</Label>
                            <Input required/>
                        </div>
                        <div className={"flex justify-end"}>
                            <Button className={"px-0"} variant={"link"} size={"sm"}>
                                Add Licenses
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function AddressForm({onDataSubmit}: { onDataSubmit?: (values: Address) => void }) {
    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
    });

    function onSubmit(values: z.infer<typeof addressSchema>) {
        const address = values as Address;
        onDataSubmit && onDataSubmit(address);
        form.reset();
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    Account Address
                </DialogDescription>
            </DialogHeader>
            <DialogBody>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5 w-[60%]"}>
                        <Label>
                            Address Type
                        </Label>
                        <Input placeholder={"Office, Billing, Shipping..."}/>
                    </div>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>
                            Address
                        </Label>
                        <Input/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>
                                State
                            </Label>
                            <Combobox options={statesAndCodes.map((e) => {
                                return {
                                    value: e.state,
                                    label: e.state
                                }
                            })} selected={""}/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>
                                City
                            </Label>
                            <Input/>
                        </div>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[80%]"}>
                            <Label>
                                Village
                            </Label>
                            <Input/>
                        </div>
                        <div className={"flex flex-col gap-1.5 w-[80%]"}>
                            <Label>
                                Pin Code
                            </Label>
                            <Input/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>
                                Route
                            </Label>
                            <Input/>
                        </div>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter className={"mt-4"}>
                <Button variant={"secondary"}>
                    Add Address
                </Button>
            </DialogFooter>
        </DialogContent>
    );
}