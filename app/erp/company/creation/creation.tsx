import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Label} from "@radix-ui/react-label";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {useEffect, useState} from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import {Button, buttonVariants} from "@/components/ui/button";
import format from "date-fns/format";
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {StorageService} from "@/utils/local-storage-service";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {minimalCompany} from "@/utils/interfaces/company-interface";
import {DatabaseService} from "@/app/service/database-service";
import {toast} from "sonner";

const companySchema = z.object({
    companyName: z.string().min(2).max(50),
    companyAlias: z.string(),
    bookBegins: z.date(),
    bookEnds: z.date(),
});

const taxSchema = z.object({
    registrationType: z.string(),
    gstNumber: z.string(),
    companyPan: z.string(),
});

const businessSchema = z.object({
    businessType: z.string(),
    businessAddress: z.string().min(5).max(40),
    businessContact: z.string(),
    businessEmail: z.string(),
});


export default function CompanyCreation({closeDialog} : {closeDialog: () => void}) {
    const [companyInfo, setCompanyInfo] = useState<any>();
    const [businessInfo, setBusinessInfo] = useState<any>();
    const [taxInfo, setTaxInfo] = useState<any>()
    const [activeTab, setActiveTab] = useState<any>("company")

    const crumbBar = () => {
        if (activeTab === "company") {
            return (
                <p className={"text-xs"}>Company Info</p>
            )
        } else if (activeTab === "business") {
            return (
                <div className={"flex gap-2 items-center"}>
                    <Button variant={"link"} className={"text-xs px-0 h-4"}
                            onClick={() => {
                                setActiveTab("company")
                            }}
                    >
                        Company Info
                    </Button>
                    <ChevronRightIcon></ChevronRightIcon>
                    <p className={"text-xs"}>Business Info</p>
                </div>
            );
        } else if (activeTab === "tax") {
            return (
                <div className={"flex gap-2 items-center"}>
                    <Button variant={"link"} className={"text-xs px-0 h-4"}
                            onClick={() => {
                                setActiveTab("company")
                            }}
                    >
                        Company Info
                    </Button>
                    <ChevronRightIcon></ChevronRightIcon>
                    <Button variant={"link"} className={"text-xs px-0 h-4"}
                            onClick={() => {
                                setActiveTab("business")
                            }}
                    >
                        Business Info
                    </Button>
                    <ChevronRightIcon></ChevronRightIcon>
                    <p className={"text-xs"}>Tax Info</p>
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col">
            <div className={"flex mt-3"}>
                {
                    crumbBar()
                }
            </div>
            <Tabs className="w-[100%] mt-2" value={activeTab}>
                <TabsContent value="company">
                    <CompanyInfo onDataSubmit={(values: any) => {
                        setCompanyInfo(values);
                        setActiveTab("business");
                    }}></CompanyInfo>
                </TabsContent>
                <TabsContent value="business">
                    <BusinessCompany
                        onDataSubmit={(values) => {
                            setBusinessInfo(values);
                            setActiveTab("tax");
                        }}
                    ></BusinessCompany>
                </TabsContent>
                <TabsContent value="tax">
                    <CompanyTaxInfo
                        onDataSubmit={(values) => {
                            setTaxInfo(values);
                            const companyData: minimalCompany = {
                                company_name: companyInfo['companyName'],
                                company_alias: companyInfo['companyAlias'],
                                book_begins: companyInfo['bookBegins'],
                                book_ends: companyInfo['bookEnds'],
                                company_gst: values['gstNumber'],
                                company_type: values['registrationType'],
                                company_address: businessInfo['businessAddress'],
                                company_email: businessInfo['businessEmail'],
                                company_contact: businessInfo['businessContact'],
                                business_type: businessInfo['businessType'],
                                company_pan: values['companyPan'],
                            }

                            const userId = StorageService().readFromLocalStorage("user")['userId'];
                            DatabaseService().createCompany(companyData, userId);
                            closeDialog();
                        }}
                    ></CompanyTaxInfo>
                </TabsContent>
            </Tabs>
            {
                activeTab != "company" ?
                    <Button className={"absolute bottom-[24px]"} variant={"secondary"}
                            onClick={() => {
                                if (activeTab === "business") {
                                    setActiveTab("company");
                                } else if (activeTab === "tax") {
                                    setActiveTab(("business"))
                                }
                            }}
                    >
                        Previous
                    </Button>
                    : <></>
            }
        </div>
    );
}

export function CompanyInfo({onDataSubmit}: { onDataSubmit: (data: any) => void }) {

    const form = useForm<z.infer<typeof companySchema>>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            companyName: StorageService().readFromLocalStorage("companyInfo") != null
                ? StorageService().readFromLocalStorage("companyInfo")['companyName'] : "",
            companyAlias:
                StorageService().readFromLocalStorage("companyInfo") != null ?
                    StorageService().readFromLocalStorage("companyInfo")['companyAlias'] : "",
            bookBegins:
                StorageService().readFromLocalStorage("companyInfo") != null ?
                    new Date(StorageService().readFromLocalStorage("companyInfo")['bookBegins']) : new Date(),
            bookEnds:
                StorageService().readFromLocalStorage("companyInfo") != null ?
                    new Date(StorageService().readFromLocalStorage("companyInfo")['bookEnds']) : new Date()
        }
    });

    function onSubmit(values: z.infer<typeof companySchema>) {
        onDataSubmit(values);
        StorageService().saveToLocalStorage("companyInfo", values);
    }

    return (
        <div className="flex flex-col px-0.5">
            <Avatar className="h-12 w-12 my-4">
                <AvatarImage src="https://vercel.com/api/www/avatar?u=abhi4529&s=44"></AvatarImage>
            </Avatar>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Apple Inc." {...field}
                                    ></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyAlias"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company Alias</FormLabel>
                                <FormControl>
                                    <Input placeholder="Apple Technologies" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2 mt-2 pt-1">
                        <FormField
                            control={form.control}
                            name="bookBegins"
                            render={({field}) => (
                                <FormItem className="flex flex-col gap-1.5 w-[100%]">
                                    <FormLabel>Book Begins</FormLabel>
                                    <FormControl>
                                        <Popover>
                                            <PopoverTrigger>
                                                <div
                                                    className={cn(
                                                        buttonVariants({variant: "outline"}) +
                                                        " w-[100%] text-left font-normal justify-start"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bookEnds"
                            render={({field}) => (
                                <FormItem className="flex flex-col gap-1.5 w-[100%]">
                                    <FormLabel>Book Ends</FormLabel>
                                    <FormControl>
                                        <Popover>
                                            <PopoverTrigger>
                                                <div
                                                    className={cn(
                                                        buttonVariants({variant: "outline"}) +
                                                        " w-[100%] text-left font-normal justify-start"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex w-[100%] justify-end pt-4">
                        <Button type="submit">Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

const businessType = [
    {
        value: "hospital",
        label: "Hospital",
    },
    {
        value: "pharmacy",
        label: "Pharmacy",
    },
    {
        value: "agriculture",
        label: "Agriculture",
    },
];

export function BusinessCompany({onDataSubmit}: { onDataSubmit: (data: any) => void }) {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof businessSchema>>({
        resolver: zodResolver(businessSchema),
        defaultValues: StorageService().readFromLocalStorage("businessInfo")
    });

    function onSubmit(values: z.infer<typeof businessSchema>) {
        onDataSubmit(values);
        StorageService().saveToLocalStorage("businessInfo", values);
    }

    return (
        <div className="flex flex-col mt-6 px-0.5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="businessType"
                        render={({field}) => (
                            <FormItem className="flex flex-col gap-1.5 w-[100%]">
                                <FormLabel>Business Type</FormLabel>
                                <FormControl>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"}
                                                    className="justify-start px-3 font-normal"
                                            >
                                                {field.value ?? <p className="text-[#94a3b8]">Business Type...</p>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <Command>
                                                <CommandInput placeholder="Select Business..."/>
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup>
                                                    {businessType.map((type) => (
                                                        <CommandItem
                                                            key={type.value}
                                                            value={type.value}
                                                            onSelect={(currentValue) => {
                                                                field.onChange(currentValue);
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {type.label}
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
                        name="businessAddress"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Shop A, near C Street" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="businessContact"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company Contact</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91XXXXXXXXX" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="admin@company.com" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end pt-6">
                        <Button type="submit">Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

const registrationTypes = [
    {
        value: "regular",
        label: "Regular",
    },
    {
        value: "composition",
        label: "Composition",
    },
    {
        value: "unregistered",
        label: "Unregistered",
    },
];

export function CompanyTaxInfo({onDataSubmit}: { onDataSubmit: (data: any) => void }) {
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof taxSchema>>({
        resolver: zodResolver(taxSchema),
        defaultValues: StorageService().readFromLocalStorage("taxInfo")
    });

    function onSubmit(values: z.infer<typeof taxSchema>) {
        StorageService().saveToLocalStorage("taxInfo", values);
        onDataSubmit(values);
    }

    return (
        <div className="flex flex-col mt-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="registrationType"
                        render={({field}) => (
                            <FormItem className="flex flex-col gap-1.5 w-[100%]">
                                <FormLabel>Registration Type</FormLabel>
                                <FormControl>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    buttonVariants({variant: "outline"}) +
                                                    " w-[100%] text-left font-normal justify-start"
                                                )}
                                            >
                                                {field.value ?? "Registration Type..."}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <Command>
                                                <CommandInput placeholder="Select Business..."/>
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup>
                                                    {registrationTypes.map((type) => (
                                                        <CommandItem
                                                            key={type.value}
                                                            value={type.value}
                                                            onSelect={(currentValue) => {
                                                                field.onChange(currentValue);
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {type.label}
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
                        name="gstNumber"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company GST</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyPan"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Company PAN</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field}></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end pt-6">
                        <Button type="submit">Complete</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
