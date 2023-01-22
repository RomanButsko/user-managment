import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'

import { IAuthModal } from './authModal.interface'

const AuthModal: FC<IAuthModal> = ({ setLogin, setRegister }) => {
    const [show, setShow] = useState<boolean>(true)

    const handleLogin = () => {
        setShow(false)
        setLogin(true)
    }

    const handleRegister = () => {
        setShow(false)
        setRegister(true)
    }

    return (
        <>
            <Modal
                show={show}
                style={{ backgroundColor: '#ffff' }}
                size="lg"
                centered={true}
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Log in or register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3} className="col-md-7 mx-auto">
                        <Button onClick={handleLogin}>Sign In</Button>
                        <Button onClick={handleRegister}>Sign Up</Button>
                    </Stack>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AuthModal
