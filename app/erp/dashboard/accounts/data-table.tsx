"use client";


import {ColumnDef, getCoreRowModel, getPaginationRowModel} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {ImFilesEmpty} from "react-icons/im";
import {IoIosDocument} from "react-icons/io";
import {IoDocumentText} from "react-icons/io5";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
                                             columns, data
                                         }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <div className={"rounded-md"}>
            <Table>
                <TableHeader className={"px-3"}>
                    {
                        table.getHeaderGroups().map((headerGroups) => (
                            <TableRow>
                                {
                                    headerGroups.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </TableHead>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableHeader>
                <TableBody className={"h-full"}>
                    {
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center h-56">
                                    <div className={"flex gap-1 flex-col items-center justify-center"}>
                                        <IoDocumentText className={"h-10 w-10 text-muted-foreground"}/>
                                        <p className={"font-medium text-muted-foreground"}>No Results</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
                {
                    data.length !== 0 ?
                        <TableFooter className={"flex items-center p-1 w-full"}>
                            <p className={"italic text-xs w-full"}>
                                Total : {data.length}
                            </p>
                        </TableFooter> : <></>
                }
            </Table>
            {
                data.length !== 0 ?
                    (
                        <div className="flex items-center justify-end space-x-2 py-4 p-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    ) : <></>
            }
        </div>
    )
}
