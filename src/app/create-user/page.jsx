"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_ELECTION, GET_ALL_PARTY, GET_ALL_PARTY_LIST, GET_ALL_USER, base_url } from '@/redux-saga/constant';
import { GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING, GET_ALL_USER_PENDING } from '@/redux-saga/user/action';
import CustomContainer from '@/appcomponents/CustomContainer';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SelectForm } from '@/appcomponents/Select';
import UserRegisterForm from '@/appcomponents/UserRegisterForm';

const Page = () => {
    const state = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
console.log(state,"state");
    useEffect(() => {
        const url = base_url+GET_ALL_USER
        dispatch({ type: GET_ALL_USER_PENDING, url });
    }, []);

    return (
        <>
            <CustomContainer>
                <div className='flex'>
                    <div className="col-6">
                        <Table className="border border-gray-800">
                            <TableCaption>A list of recent user's.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="p-3">User Name</TableHead>
                                    <TableHead>Father Name</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {state.users?.map((val, ind) => {
                                    return <TableRow key={ind}>
                                        <TableCell className="p-3">{val?.name}</TableCell>
                                        <TableCell>{val?.assemblyNoandName}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="col-6 flex justify-center items-center">
                        <UserRegisterForm></UserRegisterForm>
                    </div>
                </div>
            </CustomContainer>
        </>
    );
};

export default Page;
