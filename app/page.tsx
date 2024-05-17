"use client";

import Link from 'next/link'
import {Button, buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {BsStars} from "react-icons/bs";
import {Separator} from "@/components/ui/separator";
import {Card, CardDescription, CardHeader} from "@/components/ui/card";
import {CaretRightIcon} from "@radix-ui/react-icons";
import Lottie from "lottie-react";
import chart_animation from "@/assets/chart_animation.json";
import Navbar from "@/components/page-components/navbar";
import {motion} from "framer-motion";
import AnimatedText from "@/components/animations/animated-text";


export default function Home() {
    const badges = [
        "GST Reports",
        "E-Invoice",
        "E-Way Bill",
        "Balance Sheet",
        "WhatsApp",
        "Email",
        "Invoicing",
        "Stock Management",
        "Multi Device"
    ]

    return (
        <main className={"flex flex-col px-[4%]"}>
            <Navbar/>
            <div className={"flex flex-col self-center items-center gap-3 justify-center h-screen"}>
                <div className={"flex w-[80%] flex-col gap-6 items-center justify-center"}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                        }}
                        transition={{
                            type: "spring"
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        className={"flex gap-3 justify-center py-2 overflow-hidden shadow-inner border px-8 rounded-full items-center bg-secondary"}>
                        <BsStars className={"h-5 w-5"}/>
                        <p className={"text-sm whitespace-nowrap font-medium"}>Revolutionize Your Business</p>
                    </motion.div>
                    <AnimatedText
                        align={"center"}
                        text={"AdvPACK 9.1 ERP - Propelling Your Business Growth to Unprecedented Heights and Beyond"}
                    />
                    <motion.p
                        initial={{
                            opacity: 0,
                            translateY: 50
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            type : "spring"
                        }}
                        className={"text-muted-foreground text-center min-w-[400px] max-w-[650px]"}>
                        We're not just here to propel your business; we're here to propel it to heights previously
                        thought unattainable and then continue pushing beyond, igniting a trajectory of growth that
                        surpasses expectations. This slogan embodies our unwavering commitment to driving your growth
                        journey with our cutting-edge ERP solution.
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                            delay: 0.8
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={"flex gap-8 mt-8 justify-center items-center"}>
                        <Button variant={"default"} className={"w-[200px]"}>
                            Get Started
                        </Button>
                        <motion.div
                            initial={{
                                marginLeft: 0,
                                marginRight: 0
                            }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.8
                            }}
                            animate={{
                                marginLeft: 20,
                                marginRight: 20
                            }}
                        >
                            <Separator className={"h-4"} orientation={"vertical"}/>
                        </motion.div>
                        <Button variant={"secondary"} className={"w-[200px]"}>
                            Learn More
                        </Button>
                    </motion.div>
                    <div className={"flex flex-wrap justify-center gap-3 mt-8"}>
                        {
                            badges.map((e, i) => {
                                return (
                                    <motion.div
                                        initial={{
                                            opacity : 0,
                                            translateY : 100
                                        }}
                                        transition={{
                                            type : "spring",
                                            delay : i / 20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            translateY : 0
                                        }}
                                        className={'bg-secondary rounded py-1 px-3'}>
                                        <p className={"text-xs"}>
                                            {e}
                                        </p>
                                    </motion.div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-6 py-8"}>
                <div className={"flex justify-between items-center gap-12"}>
                    <div className={"flex flex-col gap-2 mt-4"}>
                        <AnimatedText
                            text={"Unlock Efficiency and Growth with Our ERP Software"}
                            align={"left"}
                            type={"subheader"}
                        />
                        <p className={"text-muted-foreground"}>
                            AdvPACK 9.1 ERP is a comprehensive enterprise resource planning solution designed to
                            simplify and automate your business processes, enabling you to make data-driven decisions,
                            optimize operations, and drive growth.
                        </p>
                    </div>
                    <Card className={"flex flex-col w-full shadow-md p-2"}>
                        <div className={"flex flex-col gap-2 p-1 w-full"}>
                            <CardDescription>
                                Company Listing
                            </CardDescription>
                            <div className={"flex bg-secondary w-full gap-2 rounded-md p-2"}>
                                <div className={"bg-primary rounded-sm flex items-center justify-center w-12 h-[40px]"}>
                                    <p className={"text-white text-lg"}>A</p>
                                </div>
                                <div className={"flex flex-col w-full"}>
                                    <h1 className={"text-md font-medium"}>Advance Software Inc.</h1>
                                    <p className={"text-muted-foreground text-xs"}>01-04-2024</p>
                                </div>
                                <CaretRightIcon className={"h-10 w-10 text-muted-foreground"}/>
                            </div>
                            <div className={"flex bg-secondary w-full gap-2 rounded-md p-2"}>
                                <div
                                    className={"bg-primary rounded-sm flex items-center justify-center w-12 h-[40px]   "}>
                                    <p className={"text-white text-lg"}>C</p>
                                </div>
                                <div className={"flex flex-col w-full"}>
                                    <h1 className={"text-md font-medium"}>CoWork Technologies</h1>
                                    <p className={"text-muted-foreground text-xs"}>01-04-2024</p>
                                </div>
                                <CaretRightIcon className={"h-10 w-10 text-muted-foreground"}/>
                            </div>
                            <div className={"flex bg-secondary w-full items-center gap-2 rounded-md p-2"}>
                                <div className={"bg-primary rounded-sm flex items-center justify-center w-12 h-[40px]"}>
                                    <p className={"text-white text-lg"}>A</p>
                                </div>
                                <div className={"flex flex-col w-full"}>
                                    <h1 className={"text-md font-medium"}>Acme Technologies</h1>
                                    <p className={"text-muted-foreground text-xs"}>01-04-2024</p>
                                </div>
                                <CaretRightIcon className={"h-10 w-10 text-muted-foreground"}/>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={"flex justify-between items-center gap-12 py-12"}>
                    <Card className={"flex flex-col w-full shadow-md pt-8"}>

                    </Card>
                    <div className={"flex flex-col gap-2 mt-4"}>
                        <h3 className={"text-2xl font-medium"}>
                            Scalability
                        </h3>
                        <p className={"text-muted-foreground"}>
                            Whether you're a small startup or a large enterprise, our ERP solution is designed to grow
                            with your business. With flexible deployment options and customizable modules, you can
                            easily scale up or down to meet your evolving needs.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
