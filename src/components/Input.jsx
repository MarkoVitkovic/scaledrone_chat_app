import React, { useState } from 'react'

import { Input } from '@mui/joy'
import { Button } from '@mui/material'
import { AiOutlineSend } from 'react-icons/ai'

const InputField = ({sendMessage}) => {
    
    const [currentMessage, setCurrentMessage] = useState('')

    const onChange = (e) => {
        e.preventDefault()
        setCurrentMessage('')
        sendMessage(currentMessage)
    }

    return (
        <form onSubmit={e => onChange(e)} className='flex gap-2'>
            <Input placeholder="Type your message here" className='w-full' value={currentMessage} onChange={(event) => setCurrentMessage(event.target.value)}/>
            <Button type='submit' variant="contained" endIcon={<AiOutlineSend />}>
                Send
            </Button>
        </form>
    )
}

export default InputField