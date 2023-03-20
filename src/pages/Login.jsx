import React, { useState, useEffect } from 'react'

import Input from '@mui/joy/Input'
import { BsCheck } from 'react-icons/bs'
import { InputLabel, Button } from '@mui/material'

import { themeColors } from '../data/colors'
import { avatars } from '../data/avatars'
import { useStateContext } from '../contexts/context'

const Login = () => {

    const { user, setUser, color, setColor, avatar, setAvatar, setLogin } = useStateContext()
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
      if(user !== '' && color !== '' && avatar !== '') {
        setDisabled(false)
      }
    }, [user, color, avatar])
    

    const handleUser = (e) => {
        setUser(e.target.value)
        localStorage.setItem('user', e.target.value)
    }

    const handleColor = (color) => {
        setColor(color)
        localStorage.setItem('color', color)
    }

    const handleAvatar = (avatar) => {
        setAvatar(avatar)
        localStorage.setItem('avatar', avatar)
    }

    const handleLogin = () => {
        setLogin(true)
        localStorage.setItem('login', true)
    }


    return (
        <div className='bg-slate-100 h-screen flex justify-center items-center flex-col'>
            <div className='w-1/3 m-auto bg-white rounded-md'>
                <div className='w-full p-5'>
                    <div className='mb-5'>
                        <p className='text-4xl text-bold text-center text-slate-500'>LOGIN</p>
                    </div>
                    <div className='mb-5'>
                        <InputLabel id="demo-simple-select-label">Username</InputLabel>
                        <Input color="neutral" size="md" variant="outlined" onChange={handleUser} />
                    </div>
                    <div className='mb-5'>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <div className='flex gap-3'>
                            {themeColors.map((item, index) => (
                                <div className='relative mt-2 cursor-pointer flex gap-5 items-center' key={index}>
                                    <button type='button' className='h-10 w-10 rounded-full cursor-pointer' style={{ backgroundColor: item.color }} onClick={e => handleColor(item.color)} >
                                        <BsCheck className={`ml-2 text-2xl text-white ${item.color === color ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mb-5'>
                        <InputLabel id="demo-simple-select-label">Avatar</InputLabel>
                        <div className='flex gap-3'>
                            {avatars.map((item, index) => (
                                <div className='relative mt-2 cursor-pointer flex gap-5 items-center' key={index}>
                                    <button type='button' className='h-10 w-10 rounded-full cursor-pointer' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }} onClick={e => handleAvatar(item.image)} >
                                        <BsCheck className={`ml-2 text-2xl text-white ${item.image === avatar ? 'block' : 'hidden'}`} /> 
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='pt-5 text-center'>
                        <Button variant="contained" disabled={disabled} sx={{ width: '100px' }} onClick={e => handleLogin()}>
                            LOGIN
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login