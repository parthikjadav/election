import React from 'react'

const CardContainer = ({ children }) => {
    return (
        <div>
            <div className="border-custom ">
                {children}
            </div>
        </div>
    )
}

export default CardContainer
