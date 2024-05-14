"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LOGIN_USER, base_url } from "@/redux-saga/constant"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"

function TabsDemo() {

    const cardNo = useRef()
    const password = useRef()
    const router = useRouter()
    const uservote = useSelector((state) => state.userReducer.votes)
    console.log(uservote,"uservote");

    useEffect(() => {

        try {
            let user = JSON.parse(localStorage.getItem("user"));
            const router = useRouter();
            if (user?.role == "Admin" && user) {
                router.push("/admin/dashboard")
            } else if (user) {
                router.push("/user/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }, [])

    const hendleLogin = async () => {
        const data = {
            cardNo: cardNo.current.value,
            password: password.current.value
        }
        console.log(data)
        const isExsist =  uservote.filter((item) => 
            item.user?.cardNo == data.cardNo 
        )
        console.log(isExsist,"fldhgyh");
        if(isExsist&&isExsist.length>0){
           return toast('You have submitted vote already!',
                {
                    icon: '❌',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }  
        if (data.cardNo === "") {
            alert("Enter card no.")
        }
        else if (data.password === "") {
            alert("Enter password.")
        } 
        else {
            console.log(data, "data");
            try {
                const res = await axios.post(base_url + LOGIN_USER, data)
                if (res.status == 200) {
                    toast('Login Success !',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    router.push("/user/dashboard")
                }
            } catch (error) {
                toast('Invalid Credancials!',
                    {
                        icon: '❌',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            }
        }
    }

    return (
        <>
            <div className="w-full h-[100%] flex flex-col items-center justify-center">
                <div className="logo mt-5">
                    <svg width="150" height="70" viewBox="0 0 192 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.6602 49.1639H57.0699L26.8044 73.994H143.378L165.207 58.1068L149.834 57.6108L154.293 49.1639H191.99L145.87 81.9448H0.0214844L45.6602 49.1639Z" fill="#CBCBCB" />
                        <path d="M93.8056 0L51.1104 73.994H129.492L154.788 32.7809L93.8056 0Z" fill="white" />
                        <path d="M51.1104 89.3998L102.957 121.67L123.051 89.3998H51.1104Z" fill="white" />
                        <path opacity="0.47" d="M0.0214844 81.9448V86.905H148.347L191.99 56.1228V49.1639L145.87 81.9448H0.0214844Z" fill="#8E8E8E" />
                    </svg>
                    <h1 className="font-semibold text-center py-5 text-2xl mb-5">E-ELECTION</h1>
                </div>
                <h2 className="py-5 text-xl font-bold">Login to your account</h2>
                <div className="form w-[300px]">
                    <div className="space-y-1 py-2">
                        <Label htmlFor="name">Card no.</Label>
                        <Input id="name" ref={cardNo} defaultValue="" />
                    </div>
                    <div className="space-y-1 py-2">
                        <Label htmlFor="name">Password</Label>
                        <Input id="name" ref={password} defaultValue="" />
                    </div>
                    <h4>Admin Login <Link href="/admin/login" className="underline">here.</Link></h4>
                    <Button className="w-full my-4" onClick={hendleLogin}>Login</Button>
                </div>
                <Toaster></Toaster>
            </div>
        </>
    )
}

export default TabsDemo;