import React, { useState, useEffect } from 'react'

import { Button } from '@mui/material'

import { useStateContext } from '../contexts/context'
import InputField from './Input'
import Messages from './Messages'

const Room = () => {

    const { user, setUser, avatar, setAvatar, color, setColor } = useStateContext()

    /* state */
    const [messages, setMessages] = useState([])

    const drone = new window.Scaledrone('cq2lPVP4KEpWrHrK')
    const room = drone.subscribe('observable-room')

    useEffect(() => {
        drone.on('open', error => {
            if (error) {
                return console.error(error);
            }
        })

        room.on('data', message => {
            setMessages((messages) => [...messages, message])
        })
    }, [])

    const sendMessage = (e) => {

        if (e.trim() === '') return;
        drone.publish({
            room: 'observable-room',
            message: {
                message: e,
                user: user,
                avatar: avatar,
                color: color,
                timestamp: new Date().getTime()
            }
        })
    }

    const logout = () => {
        localStorage.clear()
        setUser('')
        setAvatar('')
        setColor('')
    }

    return (
        <>
            <div className=''>
                <div className='py-5 w-2/3 flex flex-col px-20 bg-slate-100'>
                    <p className='text-center text-xl text-bold text-slate-500'>Room: {room.name}</p>
                </div>
                <div className='w-2/3 flex flex-col pb-20 pt-4 px-20'>
                    <Messages messages={messages} />
                </div>
                <div className='w-1/3 fixed right-0 top-0 bg-slate-100 h-screen'>
                    <div className='flex justify-end p-5'>
                        <Button variant="text" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                    <div className='h-screen flex justify-center items-center flex-col'>
                        <img src={avatar} alt="avatar" className='w-3/5 rounded-full' />
                        <h2 className='text-3xl mt-2 font-bold text-slate-500'>{user}</h2>
                    </div>
                </div>
                <div className='px-20 py-4 fixed bottom-0 left-0 w-2/3 bg-slate-100 pr-0'>
                    <InputField sendMessage={sendMessage} />
                </div>
            </div>
        </>
    )
}

export default Room