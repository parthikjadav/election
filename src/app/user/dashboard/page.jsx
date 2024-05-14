"use client"

import VotingTable from '@/appcomponents/VotingTable';
import { ADD_VOTE, base_url } from '@/redux-saga/constant';
import { ADD_VOTE_PENDING } from '@/redux-saga/user/action';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast,Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/user/login");
        }
    }, [])
    const finalfata = (rowdata) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const datas = {
            user: user?._id,
            party: rowdata.party_id,
            election: rowdata?.election,
        }
        const url = base_url + ADD_VOTE;
        dispatch({ type: ADD_VOTE_PENDING, payload: { url, data: datas } })
        showToast()

        setTimeout(() => {
            localStorage.removeItem("user");
            router.push("/user/login");
        }, 2000)
    }
    const connectionData = useSelector((state) => state.userReducer.connection);
    let data = connectionData?.map((connection) => ({
        id: connection?._id,
        election_name: connection?.election?.election_name,
        election: connection?.election?._id,
        party_id: connection?.party?._id,
        party: connection?.party?.party_name,
        partylogo: connection?.party?.party_logo,
    }));

    const showToast=()=>{
       return toast('Vote hase been Submited Successfully !',
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
    return (
        <div>
            <VotingTable data={data} Output={finalfata}></VotingTable>
            <Toaster/>
        </div>
    )
}

export default page
