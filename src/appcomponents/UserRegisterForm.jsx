import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { DatePickerDemo } from './DatePicker'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { ADD_USER, base_url } from '@/redux-saga/constant'
import { ADD_USER_PENDING } from '@/redux-saga/user/action'
import toast from 'react-hot-toast'
import { Toaster } from '@/components/ui/toaster'

const UserRegisterForm = () => {

    const [data,setData] = React.useState({})
    const dispatch = useDispatch()
    const hendleOnChange =(e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const hendleSubmit = (e) => {
        console.log(data,'data');
        if(data.cardNo !== "" && data.password !== "" && data.name !== "" && data.fatherName !== "" && data.sex !== ""){
            let url = base_url+ADD_USER
            dispatch({type:ADD_USER_PENDING,payload:{url,data}})
            toast('Added Successfully', {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    }

    // console.log(data,'data');
    return (
        <div className='w-[400px] px-3 mb-10'>
            <h1 className='text-2xl text-center mt-2 my-4'>User Register Form</h1>
            <div className="space-y-1  py-2">
                <Label htmlFor="current">Card no.</Label>
                <Input name="cardNo" id="current" className="w-full" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">Password</Label>
                <Input id="current" name="password" type="password"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">Name</Label>
                <Input id="current" name="name" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">Father Name</Label>
                <Input id="current" name="fatherName" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">Gender</Label>
                <Input id="current" name="sex" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 flex flex-col  py-2">
                <Label htmlFor="current" className="py-2">Date of Birth</Label>
                <Input type="date" name="dob" onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">State</Label>
                <Input id="current" name="assemblyNoandName" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">City</Label>
                <Input id="current" name="partNoandName" type="text"  onChange={hendleOnChange}/>
            </div>
            <div className="space-y-1 py-2">
                <Label htmlFor="current">Address</Label>
                <Textarea type="text" name="address" placeholder="Enter your address here" rows={3} className="mt-2" onChange={hendleOnChange}></Textarea>
            </div>

            <Button className="my-3" onClick={hendleSubmit}>Submit</Button>
            <Toaster></Toaster>
        </div>
    )
}

export default UserRegisterForm
