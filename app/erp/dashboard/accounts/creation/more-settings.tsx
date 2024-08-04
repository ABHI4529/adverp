import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Combobox} from "@/components/ui/combobox";
import {Switch} from "@/components/ui/switch";
import {IoSave} from "react-icons/io5";


export default function MoreSettings() {

    const pricingLevels = [
        {
            label : "Not Applicable",
            value : "na"
        },
        {
            label : "Wholesale",
            value : "wholesale"
        },
        {
            label : "Dealer",
            value : "dealer"
        },
        {
            label : "Purchase",
            value : "purchase"
        },
        {
            label : "Retail",
            value : "retail"
        },
        {
            label : "Standard Price",
            value : "standard_price"
        }
    ]

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={"link"}>
                    More Settings
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        More Settings
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Pricing Level</Label>
                        <Combobox options={pricingLevels} selected={""}/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Default CR Days</Label>
                            <Input required/>
                        </div>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Credit Limit</Label>
                            <Input required/>
                        </div>
                    </div>
                    <div className={"flex border p-2 rounded-lg justify-between items-center gap-1.5"}>
                        <div className={"flex flex-col"}>
                            <p>Bill by Bill</p>
                            <p className={"text-muted-foreground text-xs"}>This will turn on bill by bill invoicing
                                instead of balance only</p>
                        </div>
                        <Switch/>
                    </div>
                    <div className={"flex border p-2 rounded-lg justify-between items-center gap-1.5"}>
                        <div className={"flex flex-col"}>
                            <p>Stop Invoice/DM</p>
                            <p className={"text-muted-foreground text-xs"}>
                                This will immediately stop the invoicing and DM for this account.
                            </p>
                        </div>
                        <Switch/>
                    </div>
                    <div className={"flex border p-2 rounded-lg justify-between items-center gap-1.5"}>
                        <div className={"flex flex-col"}>
                            <p>Transporter</p>
                            <p className={"text-muted-foreground text-xs"}>
                                This account is a transporter.
                            </p>
                        </div>
                        <Switch/>
                    </div>
                </div>
                <DialogFooter>
                    <Button className={"gap-2"}>
                        Save
                        <IoSave/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}