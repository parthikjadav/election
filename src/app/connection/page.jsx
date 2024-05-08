"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  GET_ALL_ELECTION, GET_ALL_PARTY, GET_ALL_PARTY_LIST, base_url } from '@/redux-saga/constant';
import { GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING } from '@/redux-saga/user/action';
import CustomContainer from '@/appcomponents/CustomContainer';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SelectForm } from '@/appcomponents/Select';

const Page = () => {
    const state = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const url = base_url + GET_ALL_PARTY_LIST;
        const elcurl = base_url + GET_ALL_ELECTION;
        const partyurl = base_url + GET_ALL_PARTY;
        dispatch({ type: GET_ALL_CONNECTION_PENDING, url });
        dispatch({ type: GET_ALL_ELECTION_PENDING, url: elcurl });
        dispatch({ type: GET_ALL_PARTY_PENDING, url: partyurl });
    }, []);

    return (
        <>
            <CustomContainer>
                <div className='flex'>
                    <div className="col-6">
                        <Table className="border border-gray-800">
                            <TableCaption>A list of recent Connection of post and party's.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="p-3">Party Name</TableHead>
                                    <TableHead>Election Name</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {state.connection?.map((val, ind) => {
                                    return <TableRow key={ind}>
                                        <TableCell className="p-3">{val.party?.party_name}</TableCell>
                                        <TableCell>{val.election?.election_name}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="col-6 h-[60vh] flex justify-center items-center">
                        <SelectForm data={state}></SelectForm>
                    </div>
                </div>
            </CustomContainer>
        </>
    );
};

export default Page;
