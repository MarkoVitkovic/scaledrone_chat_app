import React from 'react'

import { useStateContext } from '../contexts/context'

import { Tooltip } from '@mui/material'
import { format } from 'date-fns'

const Messages = ({ messages }) => {

    const { user } = useStateContext()

    return (
        <div>
            {messages.map((msg, key) => (
                <div key={key} className={`flex flex-col ${user === msg.user ? `items-end` : `items-start`}`}>
                    <div className='flex w-2/5 py-1 gap-2 items-center' key={key}>
                        <Tooltip title={msg.user} placement="left">
                            <div className={`w-8 rounded-full ${user === msg.user ? `hidden` : ``}`}>
                                <img src={msg.avatar} alt="avatar" className='w-full rounded-full' />
                            </div>
                        </Tooltip>
                        <Tooltip title={format(msg.timestamp, 'p')} placement="left">
                            <div className='cursor-pointer flex w-full'>
                                <p className={` rounded-md w-full p-1 text-ellipsis overflow-hidden ...`} style={{ backgroundColor: msg.color }}>{msg.message}</p>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Messages