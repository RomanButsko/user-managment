import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import { useActions } from '../../hook/useActions'
import { useAuth } from '../../hook/useAuth'
import { IUserLogin } from '../../store/auth/auth.interface'
import { ILogin } from './login.interface'

const Login: FC<ILogin> = ({ setLogin }) => {
    const [show, setShow] = useState<boolean>(true)
    const [formData, setFormData] = useState<IUserLogin>({
        email: '',
        password: '',
    })

    const { error } = useAuth()

    const handleClose = () => setLogin(false)

    const { login } = useActions()

    const handleInput = (field: string, value: any) => {
        setFormData({
            ...formData,
            [field]: value,
        })
    }

    const handleShow = () => {
        setShow(false)
        setLogin(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        login(formData)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleShow}
                style={{ backgroundColor: '#ffff' }}
                keyboard={true}
                size="lg"
                centered={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    handleInput('email', e.target.value)
                                }
                                autoFocus
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="*******"
                                value={formData.password}
                                onChange={(e) =>
                                    handleInput('password', e.target.value)
                                }
                                autoFocus
                            />
                            {error && (
                                <div style={{ color: 'red' }}>{error}</div>
                            )}
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
