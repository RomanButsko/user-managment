import { FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import { useActions } from '../../hook/useActions'
import { useAuth } from '../../hook/useAuth'
import { IUserRegister } from '../../store/auth/auth.interface'
import { IRegister } from './register.interface'

const Register: FC<IRegister> = ({ setRegister }) => {
    const [show, setShow] = useState<boolean>(true)
    const [formData, setFormData] = useState<IUserRegister>({
        name: '',
        email: '',
        password: '',
    })

    const { registerUser } = useActions()
    const { error } = useAuth()

    const handleClose = () => setRegister(false)

    const handleShow = () => {
        setShow(false)
        setRegister(false)
    }

    const handleInput = (field: string, value: any) => {
        setFormData({
            ...formData,
            [field]: value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerUser(formData)
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
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Alex Spinov"
                                autoFocus
                                value={formData.name}
                                onChange={(e) =>
                                    handleInput('name', e.target.value)
                                }
                            />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    handleInput('email', e.target.value)
                                }
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="*******"
                                value={formData.password}
                                onChange={(e) =>
                                    handleInput('password', e.target.value)
                                }
                            />
                            {error && (
                                <div style={{ color: 'red' }}>{error}</div>
                            )}
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
