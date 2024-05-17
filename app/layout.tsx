import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/utils/theme-provider";
import {GeistSans} from 'geist/font/sans';
import {Toaster} from "@/components/ui/sonner";


export const metadata: Metadata = {
    title: "AdvPACK Cloud",
    description: "New business generation",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={GeistSans.className}>
        {children}
        </body>
        </html>
    );
}
