import React from 'react'
import CustomContainer from './CustomContainer'
import CardContainer from './CardContainer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const AppTable = ({ data, partyMode, hendleDelete, electionMode ,desc}) => {
    // console.log(partyMode,"data");   
    return (
        <>
            <CustomContainer>
                <CardContainer>
                    <div className="head-content">
                        <h3 className='font-semibold'>{desc?.title}</h3>
                        <p className='icon-custom text-[14px]'>{desc?.desc}</p>
                    </div>
                    <div className="body-list">
                        <ul className='py-5'>
                            {
                                data?.map((val, index) => {
                                    console.log(val,"data")
                                    // console.log(data,"data map")
                                    return <li key={index} className='flex justify-between items-center mb-5'>
                                        {
                                          partyMode && <div className='flex items-center gap-3'>
                                                <div className='party-logo w-[46px] h-[46px] rounded-full'>
                                                    <Image className='rounded-full grayscale' priority={false} src={val.party_logo||"https://pngbuy.com/wp-content/uploads/2023/05/BJP-Logo-Black-And-White-PNG-400x400.png"} alt='bjp logo' width={46} height={46} />
                                                </div>
                                                <div>
                                                    <h1 className='text-md font-semibold'>
                                                        {
                                                            val.party_name
                                                        }
                                                    </h1>
                                                    <p className='icon-custom'> {val.short_code}</p>
                                                </div>
                                            </div>
                                        }
                                        {
                                            electionMode && <div className='flex items-center gap-3'>
                                                <div>
                                                    <h1 className='text-md font-semibold'>
                                                        {
                                                            val.election_name
                                                        }
                                                    </h1>
                                                    <p className='icon-custom'>
                                                        {
                                                            val.date
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                        <div>
                                            {
                                                partyMode ? <><Button onClick={() => hendleDelete(val._id)} className='font-semibold'>Delete</Button></> : null
                                            }
                                        </div>
                                    </li>
                                }
                                )
                            }
                        </ul>
                    </div>
                </CardContainer>
            </CustomContainer>
        </>
    )
}

export default AppTable
