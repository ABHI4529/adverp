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
import {IoSave} from "react-icons/io5";


export default function LicensesDetails(){
    return(
        <Dialog>
            <DialogTrigger className={"w-min"}>
                <Button className={"px-0"} variant={"link"}>
                    Add Licenses
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        Add Licenses
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Food Lic No.</Label>
                        <Input/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Drug Lic No.</Label>
                            <Input/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>MSME/Udyam</Label>
                            <Input/>
                        </div>
                    </div>
                </div>
                <DialogFooter className={"justify-end"}>
                    <Button className={"gap-2"}>
                        Save
                        <IoSave/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}