import React from 'react'

const Card = ({ title, desc, value, icon }) => {
    return (
        <>
            <div className="border-custom ">
                <div className='head flex justify-between items-center'>
                    <div className="head-text text-sm font-semibold pb-2">
                        {title}
                    </div>
                    <div className='icon-custom'>
                        {/* <i className={icon + " text-[14px]"}></i> */}
                    </div>
                </div>
                <div className="body">
                    <h2 className='font-bold text-[1.5rem] leading-8'>{value}</h2>
                    <p className='icon-custom text-[0.75rem] leading-4'>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card
