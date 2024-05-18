import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {motion} from "framer-motion";


export default function Navbar(){
    return (
        <motion.header
            initial={{ translateY: -100}}
            animate={{ translateY: 0, borderBottom : "solid 1px #f4f7fa"}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            className={"fixed bg-white/80 backdrop-blur-md left-0 right-0"}>
            <div className={"flex px-[4%] justify-between py-2 items-center"}>
                <div className={"flex w-[150px]"}>
                    <p>AdvPACK</p>
                </div>
                <div className={"flex gap-2 p-1 h-9"}>
                    <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-8 w-[120px]")}>
                        Home
                    </Link>
                    <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-8 w-[120px]")}>
                        Products
                    </Link>
                    <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-8 w-[120px]")}>
                        About Us
                    </Link>
                    <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}) + " h-8 w-[120px]")}>
                        Contact
                    </Link>
                    <Link
                        className={buttonVariants({className: "w-[150px]"})}
                        href={"/erp/signup_login"}>
                        Login
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}