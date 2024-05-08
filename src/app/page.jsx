"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import "../../styles/globals.css"

const page = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)

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
