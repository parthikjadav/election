"use client"

import CustomContainer from '@/appcomponents/CustomContainer'
import PlusIcon from '@/appcomponents/PlusIcon'
import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ELECTION_PENDING, GET_ALL_ELECTION_PENDING } from '@/redux-saga/user/action'
import { ADD_ELECTION, GET_ALL_ELECTION, base_url } from '@/redux-saga/constant'

const page = () => {
  const elctions = useSelector((state) => state.userReducer.elections)
  const [open, setOpen] = React.useState(false)
  const [form, setForm] = React.useState({})

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setOpen(false)
    const data = form
    const url = base_url + ADD_ELECTION
    dispatch({ type: ADD_ELECTION_PENDING, payload: { url, data } })

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

  useEffect(() => {
    const url = base_url + GET_ALL_ELECTION
    dispatch({ type: GET_ALL_ELECTION_PENDING, url })
  }, [])


  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="none"><PlusIcon></PlusIcon></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Election</DialogTitle>
            <DialogDescription>
              Add Election here. Click Add when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-start w-[100px] me-2">
                Election Name
              </Label>
              <Input id="name" name="election_name" type="text" onChange={handleChange} className="col-span-3 ms-[0.9rem]" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-start w-[150px] ">
                Date of Election
              </Label>
              <Input id="username" name="date" type="date" onChange={handleChange} className="col-span-3 ms-[0.9rem]" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} type="submit">Add Election</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <CustomContainer>
        <Table className="border border-gray-800">
          <TableCaption>A list of recent Elections.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="p-3">Elction Name</TableHead>
              <TableHead>Election Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {elctions?.map((val, ind) => {
             return <TableRow key={ind}>
                <TableCell className="p-3">{val.election_name}</TableCell>
                <TableCell>{val.date}</TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </CustomContainer>
      <Toaster></Toaster>
    </>
  )
}

export default page
