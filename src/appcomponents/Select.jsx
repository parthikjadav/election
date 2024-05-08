"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { ADD_PARTY_LIST, base_url } from "@/redux-saga/constant"
import { ADD_CONNECTION_PENDING, ADD_CONNECTION_SUCCESS, ADD_ELECTION_PENDING } from "@/redux-saga/user/action"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { Toaster } from "@/components/ui/toaster"

const FormSchema = z.object({
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
})

export function SelectForm({ data }) {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    const dispatch = useDispatch()

    const [selectValue, setSelectValue] = useState({});

    function onSubmit() {
        try {
            if (selectValue.party !== "" && selectValue.election !== "") {
                const url = base_url + ADD_PARTY_LIST;
                dispatch({ type: ADD_CONNECTION_PENDING, payload: { url, data: selectValue } });
                toast('Added Successfully', {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }
        } catch (error) {
            toast('Somthing Went Wrong !!', {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="party"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Party</FormLabel>
                                <Select onValueChange={(val) => setSelectValue({ ...selectValue, party: val })} {...field} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Party" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            data?.partys.map((val, ind) => {
                                                return <SelectItem key={ind} value={val._id}>{val.party_name}</SelectItem>
                                            }
                                            )
                                        }
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can party here.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Election</FormLabel>
                                <Select onValueChange={(val) => setSelectValue({ ...selectValue, election: val })} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Election" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            data?.elections.map((val, ind) =>
                                                <SelectItem value={val._id}>{val.election_name}</SelectItem>
                                            )
                                        }
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can party here.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <Button onClick={onSubmit}>Submit</Button>
            </form>
            <Toaster></Toaster>
        </Form>
    )
}
