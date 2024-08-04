import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";

import {SideBar} from "@/components/ui/sidebar";
import {ThemeProvider} from "@/utils/theme-provider";
import DashboardHeader from "@/components/ui/dashheader";
import Sidebar from "@/app/help-desk/help-components/sidebar";

export const metadata = {
    title: "AdvCloud",
    description: "Generated by Next.js",
};

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={GeistSans.className}>
        <div className="flex flex-col h-screen">
            <DashboardHeader></DashboardHeader>
            <div className="flex h-[100%]">
                <Sidebar/>
                <div className="flex flex-col h-full w-[100%]">{children}</div>
            </div>
        </div>
        </body>
        </html>
    );
}
