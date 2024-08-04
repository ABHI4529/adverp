"use client";

import {ColumnDef} from "@tanstack/table-core";
import {AccountType} from "@/app/types/account-type";


export const columns : ColumnDef<AccountType>[]=[
    {
        accessorKey : "account_name",
        header : "Particulars"
    },
    {
        accessorKey : "contact",
        header : "Contact"
    },
    {
        accessorKey : "account_group",
        header : "Group"
    },
    {
        accessorKey : "op_bal",
        header : "Op. Balance"
    }
]