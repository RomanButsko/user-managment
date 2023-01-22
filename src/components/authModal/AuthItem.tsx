import { useState } from 'react'

import Login from '../Login/Login'
import Register from '../Register/Register'
import AuthModal from '../authModal/AuthModal'

const Auth = () => {
    const [login, setLogin] = useState<boolean>(false)
    const [register, setRegister] = useState<boolean>(false)
    return (
        <>
            {login ? (
                <Login setLogin={setLogin} />
            ) : register ? (
                <Register setRegister={setRegister} />
            ) : (
                <AuthModal setLogin={setLogin} setRegister={setRegister} />
            )}
        </>
    )
}

export default Auth
