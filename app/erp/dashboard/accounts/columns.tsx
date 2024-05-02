"use client";

import {ColumnDef} from "@tanstack/table-core";

export type Account = {
    id: string;
    account_name : string;
    op_bal : string;
}

export const columns : ColumnDef<Account>[]=[
    {
        accessorKey : "id",
        header : "ID"
    },
    {
        accessorKey : "account_name",
        header : "Particulars"
    },
    {
        accessorKey : "op_bal",
        header : "Op. Balance"
    }
]