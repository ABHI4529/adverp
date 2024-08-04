"use client";

import { Button } from "@/components/ui/button";
export default function DefaultDashboard() {

    return (
        <div className="flex flex-col h-[100%] justify-center items-center">
            <h1 className="text-primary/80 text-4xl">AdvCloud ERP</h1>
            <p className="text-primary/60">
                Start managing your business with the Next Gen Technology
            </p>
            <div className="flex flex-wrap gap-2 mt-8 w-[60%] justify-center items-center]">
                <Button variant={"link"} className="items-center gap-2">
                    Watch Tutorial
                </Button>
                <Button variant={"link"} className="items-center gap-2">
                    Create First Invoice
                </Button>
                <Button variant={"link"} className="items-center gap-2">
                    Create Account
                </Button>
                <Button variant={"link"} className="items-center gap-2">
                    Stock Item
                </Button>
                <Button variant={"link"} className="items-center gap-2">
                    Sale Reports
                </Button>
            </div>
        </div>
    );
}
