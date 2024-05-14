"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { GET_ALL_PARTY_LIST, base_url } from "@/redux-saga/constant"
import { GET_ALL_CONNECTION_PENDING } from "@/redux-saga/user/action"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export function VoteTableComp() {
    const dispatch = useDispatch()
    const [vote, setVote] = useState("")
    console.log(vote, "vote");
    const state = useSelector((state) => state.userReducer.connection)
    console.log(state);
    return (<>
        <Table>
            <TableCaption>A list of Candidate's.</TableCaption>
            <TableHeader>
                <TableRow >
                    <TableHead>Select</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
               
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={6} className="text-center"><Button className="w-[150px]">Submit</Button></TableCell>
                </TableRow>
            </TableFooter>
        </Table >
    </>
    )
}
