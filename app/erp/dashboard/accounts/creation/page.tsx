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
import {BiCurrentLocation, BiRupee, BiSolidSave} from "react-icons/bi";

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
import {IoAdd, IoLocate, IoLocation, IoLocationOutline, IoPencil, IoTrash} from "react-icons/io5";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {statesAndCodes} from "@/app/utils/address-states";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Address} from "@/app/types/account-type";
import {Label} from "@/components/ui/label";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {FaRupeeSign} from "react-icons/fa";
import {toast} from "sonner";
import {IoIosBuild, IoIosHome} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import SearchGstIn from "@/app/erp/dashboard/accounts/creation/search-gst";
import MoreSettings from "@/app/erp/dashboard/accounts/creation/more-settings";
import BankDetails from "@/app/erp/dashboard/accounts/creation/bank-details";

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
    const [addresses, setAddresses] = useState<Address[]>();
    const [openAddress, setOpenAddress] = useState<boolean>(false);
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
                        <Input autoFocus required/>
                    </div>
                    <div className={"flex flex-col gap-1.5 w-[60%]"}>
                        <Label>Account Group</Label>
                        <Combobox options={[...accountGroups]} selected={""}/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Email Id</Label>
                            <Input  required/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>Contact</Label>
                            <Input required/>
                        </div>
                    </div>
                    <div className={"p-4 border rounded-lg flex flex-col  gap-1.5"}>
                        <Label>Op. balance</Label>
                        <div className={"flex gap-1 items-center"}>
                            <div className={"flex w-full"}>
                                <div
                                    className={"flex text-white rounded-l-md bg-primary h-7.5 w-10 items-center justify-center"}>
                                    <BiRupee/>
                                </div>
                                <Input className={"bg-white rounded-l-none"} placeholder={"As On 01-04-2024"}/>
                            </div>
                            <ToggleGroup type={"single"} value={"Db"} className={"border rounded-md h-8 px-[2px]"}>
                                <ToggleGroupItem value={"Db"} className={"h-7"}>
                                    Db
                                </ToggleGroupItem>
                                <ToggleGroupItem value={"Cr"} className={"h-7"}>
                                    Cr
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                    {
                        addresses != undefined ?
                            (
                                <div className={"flex flex-col gap-2"}>
                                    {
                                        addresses.map((e) => (
                                            <Card className={"p-4"}>
                                                <CardHeader className={"p-0"}>
                                                    <CardTitle className={"flex items-center justify-between"}>
                                                        <div className={"flex"}>
                                                            <IoLocationOutline/>
                                                            {e.label}
                                                        </div>
                                                        <div className={"flex gap-1 items-center"}>
                                                            <Button className={"p-1 h-min"} variant={"ghost"}
                                                                    size={"sm"}>
                                                                <IoPencil className={"text-muted-foreground"}/>
                                                            </Button>
                                                            <Button className={"p-1 h-min"} variant={"ghost"}
                                                                    size={"sm"}
                                                                    onClick={() => {
                                                                        setAddresses((prevAddress) => {
                                                                            if (prevAddress) {
                                                                                return prevAddress.filter((address) => address.address != e.address);
                                                                            } else {
                                                                                return [];
                                                                            }
                                                                        });
                                                                    }}
                                                            >
                                                                <IoTrash className={"text-muted-foreground"}/>
                                                            </Button>
                                                        </div>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {e.address}
                                                    </CardDescription>
                                                </CardHeader>
                                            </Card>
                                        ))
                                    }
                                </div>
                            ) : <></>
                    }
                    <Dialog open={openAddress} onOpenChange={setOpenAddress}>
                        {
                            addresses?.length != 2 ?
                                <DialogTrigger asChild className={"w-full"}>
                                    <Button className={"w-full gap-3 font-normal justify-start"} variant={"outline"}>
                                        <IoAdd/>
                                        Add Address
                                    </Button>
                                </DialogTrigger> : <></>

                        }
                        <AddressForm onDataSubmit={(values) => {
                            setAddresses((prevAddress) => {
                                if (prevAddress) {
                                    return [...prevAddress, values];
                                } else {
                                    return [values];
                                }
                            });
                            setOpenAddress(false);
                        }}/>
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
                            <Button className={"px-0"} variant={"link"}>
                                Add Licenses
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className={"flex justify-end p-2"}>
                    <SearchGstIn/>
                    <BankDetails/>
                    <MoreSettings/>
                </Card>
            </div>
        </div>
    )
}

function AddressForm({onDataSubmit}: { onDataSubmit?: (values: Address) => void }) {
    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
    })


    const onSubmit = (values: z.infer<typeof addressSchema>) => {

        const address: Address = {
            address: values.address,
            label: values.label,
            city: values.city,
            pinCode: values.pinCode,
            route: values.route,
            state: values.city,
            village: values.village
        }

        onDataSubmit!(address);
        form.reset();
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    Account Address
                </DialogDescription>
            </DialogHeader>
            <DialogBody>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} onKeyDown={handleKeyDown}
                          className={"flex flex-col gap-3"}>
                        <FormField name={"label"} render={({field}) => (
                            <FormItem className={"w-[60%]"}>
                                <FormLabel>Address Label</FormLabel>
                                <FormControl>
                                    <Input placeholder={"Home, Billing, Shipping"} autoFocus {...field}/>
                                </FormControl>
                            </FormItem>)}/>
                        <FormField name={"address"} render={({field}) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                            </FormItem>)}/>
                        <div className={"flex gap-3"}>
                            <FormField name={"state"} render={({field}) => (
                                <FormItem className={"w-[60%]"}>
                                    <FormLabel>State</FormLabel>
                                    <FormControl className={"flex flex-col gap-2"}>
                                        <Combobox
                                            placeholder={""}
                                            className={"w-full"}
                                            mode={"single"}
                                            onChange={(value) => field.onChange(value)}
                                            options={statesAndCodes.map((e) =>
                                                ({label: e.state, value: e.code}))}
                                            selected={field.value != null ? field.value : ""}/>
                                    </FormControl>
                                </FormItem>)}
                            />
                            <FormField name={"city"} render={({field}) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                </FormItem>)}
                            />
                        </div>
                        <div className={"flex gap-3"}>
                            <FormField name={"village"} render={({field}) => (
                                <FormItem className={"w-[60%]"}>
                                    <FormLabel>Village</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                </FormItem>)}
                            />
                            <FormField name={"pinCode"} render={({field}) => (
                                <FormItem className={"w-[30]"}>
                                    <FormLabel>Pin Code</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                </FormItem>)}
                            />
                            <FormField name={"route"} render={({field}) => (
                                <FormItem className={"w-[20%]"}>
                                    <FormLabel>Route</FormLabel>
                                    <FormControl>
                                        <Input {...field}/>
                                    </FormControl>
                                </FormItem>)}
                            />
                        </div>
                        <div className={"flex justify-end mt-8"}>
                            <Button variant={"secondary"} type={"submit"} className={"w-min"}>
                                Add Address
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogBody>
        </DialogContent>
    );
}
