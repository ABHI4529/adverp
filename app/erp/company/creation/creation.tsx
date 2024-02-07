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
import {useState} from "react";
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

export default function CompanyCreation() {
    const [companyInfo, setCompanyInfo] = useState<any>();

    return (
        <div className="flex flex-col">
            <Tabs className="w-[100%] mt-4">
                <TabsList className="w-[100%]">
                    <TabsTrigger className="w-[100%]" value="company">
                        Company
                    </TabsTrigger>
                    <TabsTrigger className="w-[100%]" value="business">
                        Business
                    </TabsTrigger>
                    <TabsTrigger className="w-[100%]" value="tax">
                        Tax
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="company">
                    <CompanyInfo onDataSubmit={(values: any) => {
                        console.log(values);
                    }}></CompanyInfo>
                </TabsContent>
                <TabsContent value="business">
                    <BusinessCompany></BusinessCompany>
                </TabsContent>
                <TabsContent value="tax">
                    <CompanyTaxInfo></CompanyTaxInfo>
                </TabsContent>
            </Tabs>
        </div>
    );
}

const companySchema = z.object({
    companyName: z.string().min(2).max(50),
    companyAlias: z.string(),
    bookBegins: z.date(),
    bookEnds: z.date(),
});

export function CompanyInfo({onDataSubmit}: { onDataSubmit: (data: any) => void }) {
    const [companyName, setCompanyName] = useState<any>();
    const [alternateName, setAlternateName] = useState<any>();
    const [bookBegins, setBookBegins] = useState<any>()
    const [bookEnds, setBookEnds] = useState<any>()


    const form = useForm<z.infer<typeof companySchema>>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            companyName: companyName,
            bookBegins: bookBegins,
            companyAlias: alternateName,
            bookEnds: bookEnds
        }
    });

    function onSubmit(values: z.infer<typeof companySchema>) {
        console.log(companyName);
        onDataSubmit(values);
    }

    return (
        <div className="flex flex-col mt-4">
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
                                    <Input placeholder="Apple Inc." value={companyName}
                                           onChange={(value)=>{
                                               field.onChange(value.target.value);
                                               setCompanyName(value.target.value);
                                           }}
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
                    <div className="flex justify-end pt-4">
                        <Button type="submit">Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

const businessSchema = z.object({
    businessType: z.string(),
    businessAddress: z.string().min(5).max(40),
    businessContact: z.string(),
    businessEmail: z.string(),
});

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

export function BusinessCompany() {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof businessSchema>>({
        resolver: zodResolver(businessSchema),
    });

    function onSubmit(values: z.infer<typeof businessSchema>) {
        console.log(values);
    }

    return (
        <div className="flex flex-col mt-6">
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
                    <div className="flex justify-between pt-6">
                        <Button variant={"secondary"}>Previous</Button>
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

const taxSchema = z.object({
    registrationType: z.string(),
    gstNumber: z.string(),
    companyPan: z.string(),
    invoiceType: z.string(),
});

export function CompanyTaxInfo() {
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof taxSchema>>({
        resolver: zodResolver(taxSchema),
    });

    function onSubmit(values: z.infer<typeof taxSchema>) {
        console.log(values);
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
                                            <div
                                                className={cn(
                                                    buttonVariants({variant: "outline"}) +
                                                    " w-[100%] text-left font-normal justify-start"
                                                )}
                                            >
                                                {field.value ?? "Registration Type..."}
                                            </div>
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
                    <FormField
                        control={form.control}
                        name="invoiceType"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Invoice Type</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Select Invoice Type..."
                                        {...field}
                                    ></Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between pt-6">
                        <Button variant={"secondary"}>Previous</Button>
                        <Button type="submit">Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
