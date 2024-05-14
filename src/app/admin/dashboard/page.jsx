"use client"

import React, { useEffect } from 'react'
import Card from "../../../appcomponents/Card"
import CardContainer from "../../../appcomponents/CardContainer"
import CustomContainer from "../../../appcomponents/CustomContainer"
import "../../../../styles/globals.css"
import Image from 'next/image'
import { userData } from '@/utils/user'
import { useRouter } from 'next/navigation'

const page = () => {
  useEffect(()=>{
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const router = useRouter();
      if(!user){
        router.push("/user/login")
      }
      if (user?.role !== "Admin" && user) {
        router.push("/user/dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  },[])
  let data = [1, 2, 3, 8]
  return (
    <>
      <CustomContainer>
        <div className="flex flex-wrap gap-5 mb-4">
          <div className="col-3">
            <Card title={"Total Revenue"} value={"$123,456"} desc={"+20.1% from last month"} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>} />
          </div>
          <div className="col-3">
            <Card title={"Total Revenue"} value={"$123,456"} desc={"+20.1% from last month"} icon={"fa-solid fa-users"} />
          </div>
          <div className="col-3">
            <Card title={"Total Revenue"} value={"$123,456"} desc={"+20.1% from last month"} icon={"fa-solid fa-users"} />
          </div>
          <div className="col-3">
            <Card title={"Total Revenue"} value={"$123,456"} desc={"+20.1% from last month"} icon={"fa-solid fa-users"} />
          </div>
        </div>

        <CardContainer >
          <div className="head-content">
            <h3 className='font-semibold'>Party Votes</h3>
            <p className='icon-custom text-[14px]'>Voting count of this month.</p>
          </div>
          <div className="body-list">
            <ul className='py-5'>
              {
                data?.map((val, index) =>
                  <li key={index} className='flex justify-between items-center mb-5'>
                    <div className='flex items-center gap-3'>
                      <div className='party-logo w-[46px] h-[46px] rounded-full'>
                        <Image className='rounded-full grayscale' src="https://pngbuy.com/wp-content/uploads/2023/05/BJP-Logo-Black-And-White-PNG-400x400.png" alt='bjp logo' width={46} height={46} />
                      </div>
                      <div>
                        <h1 className='text-md font-semibold'>
                          Bhartiy Janta Party
                        </h1>
                        <p className='icon-custom'>modi.bjp@gmail.com</p>
                      </div>
                    </div>
                    <div>
                      <h1 className='font-semibold'>+200</h1>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </CardContainer>
      </CustomContainer>
    </>
  )
}

export default page
