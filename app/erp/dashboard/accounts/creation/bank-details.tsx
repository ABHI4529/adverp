import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {IoIosSave} from "react-icons/io";
import {IoSave} from "react-icons/io5";


export default function BankDetails(){
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant={"link"}>Bank Details</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        Bank Details
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Bank Name</Label>
                        <Input required/>
                    </div>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Branch Name</Label>
                        <Input required/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Account Number</Label>
                            <Input required/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>IFSC Code</Label>
                            <Input required/>
                        </div>
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