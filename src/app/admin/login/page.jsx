"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DatePickerDemo } from "@/appcomponents/DatePicker"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import Link from "next/link"

function TabsDemo() {
  const router = useRouter();
//   useEffect(() => {
    
//     try {
//       let user = JSON.parse(localStorage.getItem("user"));
//       if (user?.role == "Admin" && user) {
//       router.push("/admin/dashboard")
//     }else if (user) {
//       router.push("/user/dashboard")
//     }
//   } catch (error) {
//     console.log(error);
//   }
// },[router])
  const name = useRef()
  const password = useRef()

  const [data, setData] = useState({})

  const hendleLogin = async () => {
    if (data?.name !== "" || data?.password !== "") {
      const res = await axios.post("http://13.127.211.205:8000/v1/login/admin", data).catch(e => console.log(e))
      console.log(res.data.data, "res data");
      if (res?.status == 200) {
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
        router.push("/admin/dashboard")
      } else {
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
        <Tabs defaultValue="account" className="w-[400px] mb-5">
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login with Card no.</CardTitle>
                <CardDescription>
                  Login to your account here. Click submit when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Card no.</Label>
                  <Input onChange={(e) => { setData({ ...data, name: e.target.value }) }} value={data?.name} id="name" ref={name} defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Password</Label>
                  <Input id="name" onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data?.password} ref={password} defaultValue="" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">

                  <h4 className="my-4" >User? Login <Link href="/user/login" className="underline">here.</Link></h4>
                  <Button onClick={hendleLogin}>Submit</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <Toaster></Toaster>
      </div>
    </>
  )
}

export default TabsDemo;