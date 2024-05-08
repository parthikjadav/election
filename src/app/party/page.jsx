"use client"

import AppTable from '@/appcomponents/AppTable'
import PlusIcon from '@/appcomponents/PlusIcon'
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PARTY_PENDING, DELETE_PARTY_PENDING, GET_ALL_PARTY_PENDING, UPDATE_PARTY_PENDING } from '@/redux-saga/user/action'
import { ADD_PARTY, DELETE_PARTY, GET_ALL_PARTY, base_url } from '@/redux-saga/constant'
import toast, { Toaster } from 'react-hot-toast'

const Page = () => {
    const [open, setOpen] = React.useState(false)
    const [form, setForm] = React.useState({})
    const [file, setFile] = React.useState(null)
    const [partyList, setPartyList] = React.useState([])
    const dispatch = useDispatch()
    const party = useSelector((state) => state.userReducer.partys)

    useEffect(() => {
        setPartyList(party)
    }, [party])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const hendleUpdate = (val) => {
        setOpen(true)
        setUpdate(val)
        console.log(update, "update");
    }

    // const hendelUpdateVal = () => {
    //     dispatch({type:UPDATE_PARTY_PENDING,payload:{data:update,url:base_url + 'party/update'}})

    //     setOpen(false)
    //     setUpdate(null)
    // }

    const handleSubmit = async (e) => {

        if (form.party_name == "" || form.short_code == "" || file == "") {
            return toast.error('Fill This Form Correctly', {
                style: {
                    border: '1px solid #414a4c',
                    padding: '16px',
                    background: '#000000',
                    color: '#ffffff',
                },
                iconTheme: {
                    primary: '#020817',
                    secondary: '#ffffff',
                },
            });
        }
        e.preventDefault()


        // Create FormData object
        const formData = new FormData()

        // Append form data
        formData.append('party_name', form.party_name)
        formData.append('short_code', form.short_code)

        // Append file
        formData.append('party_logo', file)

        console.log(formData, "formData");

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const url = base_url + ADD_PARTY

        dispatch({ type: ADD_PARTY_PENDING, payload: { data: formData, url }, options })
        setOpen(false)

        darkToast()
    }

    const hendleDelete = (id) => {
        const url = base_url + DELETE_PARTY + `${id}`
        dispatch({ type: DELETE_PARTY_PENDING, payload: { url }, id })

        toast('Deleted Successfully',
            {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    const darkToast = () => {
        toast('Added Successfully',
            {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    const desc = {
        title:"Party Votes",
        desc:"Voting count of this month."
    }

    useEffect(() => {
        dispatch({ type: GET_ALL_PARTY_PENDING })
    }, [])

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="none"><PlusIcon></PlusIcon></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add party</DialogTitle>
                        <DialogDescription>
                            Add your party here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Party Name
                            </Label>
                            <Input id="name" name="party_name" onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Short code
                            </Label>
                            <Input id="username" name="short_code" onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="logo" className="text-right">
                                Logo
                            </Label>
                            <Input id="logo" name="party_logo" onChange={handleFile} type={"file"} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit} type="submit">Add Party</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <AppTable desc={desc} data={partyList} hendleDelete={hendleDelete} partyMode={true}></AppTable>
            <Toaster />
        </div>
    )
}

export default Page
