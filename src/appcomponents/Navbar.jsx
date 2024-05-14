"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING, GET_ALL_USER_PENDING } from '@/redux-saga/user/action'
import { useDispatch } from 'react-redux'
import { GET_ALL_ELECTION, GET_ALL_PARTY, GET_ALL_PARTY_LIST, GET_ALL_USER, base_url } from '@/redux-saga/constant'


const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            let user = JSON.parse(localStorage.getItem("user"));
            if (user?.role !== "Admin" && user) {
                router.push("/user/dashboard")
            } else if(!user){
                router.push("/user/login")
            }
        } catch (error) {
            console.log(error);
        }
    }, [router])

    useEffect(() => {
        const url = base_url + GET_ALL_PARTY_LIST;
        const elcurl = base_url + GET_ALL_ELECTION;
        const partyurl = base_url + GET_ALL_PARTY;
        const urlss = base_url + GET_ALL_USER
        const urlee = base_url + GET_ALL_ELECTION
        dispatch({ type: GET_ALL_CONNECTION_PENDING, url });
        dispatch({ type: GET_ALL_ELECTION_PENDING, url: elcurl });
        dispatch({ type: GET_ALL_PARTY_PENDING, url: partyurl });
        dispatch({ type: GET_ALL_USER_PENDING, url:urlss });
        dispatch({ type: GET_ALL_ELECTION_PENDING, url:urlee })
    }, []);

    const [loading, setLoading] = useState(false)

    function load() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/user/login")
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }
    function loadForLogout() {
        localStorage.removeItem("user")
        let user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/user/login")
        }
        console.log("callsed");
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }

    const navLinks = [
        {
            name: "Home",
            link: "/admin/dashboard"
        },
        {
            name: "Party",
            link: "/party"
        },
        {
            name: "Election",
            link: "/election"
        },
        {
            name: "Connection",
            link: "/connection"
        },
        {
            name: "Create User",
            link: "/create-user"
        }
    ]


    if (loading) {
        return <div className="loader-wrraper">
            <div className="loader"></div>
        </div>
    }

    const isLog = pathname.startsWith("/user/login") || pathname.startsWith("/admin/login")
    const isLinkShowInUserPage = pathname.startsWith("/user/dashboard")

    return (
        <nav id="nav-1" className={isLog ? "hidden" : " drop-shadow-sm"}>
            <div className="flex justify-between h-20 items-center px-10 lg:px-24 ">
                <div className="logo">
                    <Link href="#" className='flex items-center  gap-2'>
                        <svg width="60" height="75" viewBox="0 0 117 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.6409 30.3059H34.5511L16.2209 45.6117H86.8234L100.044 35.8185L90.733 35.5127L93.4336 30.3059H116.265L88.3325 50.5127H0L27.6409 30.3059Z" fill="#CBCBCB" />
                            <path d="M56.7996 0L30.9414 45.6115H78.4128L93.7335 20.2068L56.7996 0Z" fill="white" />
                            <path d="M30.9414 55.1079L62.3419 75L74.512 55.1079H30.9414Z" fill="white" />
                            <path opacity="0.47" d="M0 50.5127V53.5703H89.8328L116.265 34.5955V30.3059L88.3325 50.5127H0Z" fill="#8E8E8E" />
                        </svg>
                        <h1>E-ELECTION</h1>
                    </Link>
                </div>
                <div className="menu responsive-nav text-[14px] font-semibold ">
                    {
                        !isLinkShowInUserPage && navLinks.map((link, index) => {
                            let showMenu = pathname.startsWith(link.link)
                            return <Link onClick={load} className={showMenu ? 'px-4 flex items-center text-[#CACACA]' : 'px-5 flex items-center text-[#929293] hover:text-[#CACACA]'} href={link.link} key={index} > {link.name}</Link>
                        })
                    }
                    <div className="button gap-4 mx-auto flex justify-between items-center">
                        <Button onClick={loadForLogout}>Logout</Button>
                    </div>
                </div>

                <div className="button w-8 grid md:hidden items-center ">
                    <button className="btn-bar-menu">
                    </button>
                </div>

                <Drawer>
                    <DrawerTrigger className='menu-nav bg-white p-2 top-6 right-6 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                            <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                        </svg>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Wellcome Back : Parthik Jadav</DrawerTitle>
                            <DrawerDescription>Are you absolutely sure to logout?</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            {
                                navLinks.map((link, index) => {
                                    let showMenu = pathname.startsWith(link.link)
                                    return <Link onClick={load} className={showMenu ? 'px-5 flex items-center text-[#CACACA]' : 'px-5 flex items-center text-[#929293] hover:text-[#CACACA]'} href={link.link} key={index} > {link.name}</Link>
                                })
                            }
                            <Button onClick={loadForLogout} className="mx-5 mt-3 mb-5">Logout</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav >
    )
}

export default Navbar
