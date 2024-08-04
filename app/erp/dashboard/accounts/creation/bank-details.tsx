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
import {BankModel} from "@/app/types/account-type";
import {useState} from "react";
import {toast} from "sonner";

interface pageProps {
    onSubmit : (values : BankModel) => void
}

export default function BankDetails({onSubmit} : pageProps) {
    const [open, isOpen] = useState<boolean>();
    const [bankName, setBankName] = useState<string>();
    const [bankBranch, setBankBranch] = useState<string>();
    const [bankAccount, setBankAccount] = useState<string>();
    const [bankIFSC, setBankIFSC] = useState<string>();

    return(
        <Dialog open={open} onOpenChange={isOpen}>
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
                        <Input value={bankName} onChange={(value) => setBankName(value.target.value)} required/>
                    </div>
                    <div className={"flex flex-col gap-1.5"}>
                        <Label>Branch Name</Label>
                        <Input value={bankBranch} onChange={(value) => setBankBranch(value.target.value)} required/>
                    </div>
                    <div className={"flex gap-3"}>
                        <div className={"flex flex-col gap-1.5 w-[60%]"}>
                            <Label>Account Number</Label>
                            <Input value={bankAccount} onChange={(value) => setBankAccount(value.target.value)} required/>
                        </div>
                        <div className={"flex flex-col gap-1.5"}>
                            <Label>IFSC Code</Label>
                            <Input value={bankIFSC} onChange={(value) => setBankIFSC(value.target.value)} required/>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button className={"gap-2"}
                        onClick={()=>{
                            if(bankName && bankBranch && bankAccount && bankIFSC){
                                onSubmit({
                                    bankName : bankName,
                                    branchName : bankBranch,
                                    accountNumber : bankAccount,
                                    ifscCode : bankIFSC
                                });
                                isOpen(false);

                            }else{
                                toast.error("Please fill all the details", {
                                    description : "Bank Name, Account is mandatory"
                                })
                            }
                        }}
                    >
                        Save
                        <IoSave/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}