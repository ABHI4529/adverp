"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {useRouter} from "next/navigation";
import {Toaster} from "@/components/ui/sonner";
import {toast} from "sonner";

export default function Temp() {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 100) + 50; // Generates a number between 50 and 100
        setTranslate({ x: 0, y: number });
        toast.message(
            "I don't know why but something went wrong! 🥺"
        )
    };

    const router = useRouter();

    return (
        <div className={"flex flex-col min-h-screen"}>
            <img src={'https://content.imageresizer.com/images/memes/Cute-Cat-meme-4xgqu.jpg'} alt={'cat'} />
            <div className={"flex flex-col gap-2 py-12 px-12 text-center"}>
                <h1>Would you like to go on a dinner before you go?</h1>
                <div className={"flex gap-2 mt-8 justify-evenly"}>
                    <Button onClick={()=>{
                        router.push("/temp/maan-gai")
                    }}>
                        Yes, Lets goooo
                    </Button>
                    <Button
                        style={{
                            transitionDuration : "200ms",
                            width : "100px",
                            transform: `translate(${translate.x}px, ${translate.y}px)` }}
                        variant={"destructive"}
                        onClick={generateRandomNumber}
                    >
                        No
                    </Button>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}
