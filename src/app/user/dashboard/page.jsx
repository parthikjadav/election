"use client"

import {VotingTable} from '@/appcomponents/VotingTable';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    return (
        <div>
            <VotingTable></VotingTable>
        </div>
    )
}

export default page
