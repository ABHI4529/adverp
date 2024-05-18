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
import {IoSearch} from "react-icons/io5";


export default function SearchGstIn(){
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant={"link"}>
                    Search GST
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        Search GST
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col py-4"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>GST Number</Label>
                        <Input required/>
                    </div>
                </div>
                <DialogFooter>
                    <Button className={"gap-2"}>
                        <IoSearch/>
                        Search
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}