"use client";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Input} from "@/components/ui/input";
import {useState} from "react";

export const Combobox = ({...props}) => {

    const [openBox, setOpenBox] = useState<boolean>(false)

    return (
        <HoverCard
            open={openBox}
            onOpenChange={setOpenBox}
            defaultOpen={false}
        >
            <HoverCardTrigger>
                <Input
                    onFocus={event => {
                        setOpenBox(true);
                    }}
                    onBlur={() => setOpenBox(false)}
                    placeholder={props.placeholder}></Input>
            </HoverCardTrigger>
            <HoverCardContent align={"start"} className={"w-[400px] translate-y-[-5px]"}>
                <div className={"flex flex-col"}>

                </div>
            </HoverCardContent>
        </HoverCard>
    );
}