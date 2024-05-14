"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import "../../styles/globals.css"
import { useRouter } from 'next/navigation'

const page = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)
  const router = useRouter()

  useEffect(()=>{
   router.push("/user/login")
   console.log("called");
  },[])

  return (
    <div>
      {
        loading && <div className="loader-wrraper">
          <div className="loader"></div>
        </div>
      }
      <Button>Shadcn</Button>
    </div>
  )
}

export default page
