import { FC } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { AiFillDelete } from 'react-icons/ai'
import { SiAdblock } from 'react-icons/si'

import {
    useDeleteFromListMutation,
    useUpdateStatusBlockMutation,
    useUpdateStatusUnBlockMutation,
} from '../../store/api/api'
import style from './Toolbar.module.css'
import { IToolbar } from './toolbar.interface'

const Toolbar: FC<IToolbar> = ({ selectedBox, setSelectBox }) => {
    const [deletePost] = useDeleteFromListMutation()
    const [updateBlock] = useUpdateStatusBlockMutation()
    const [updateUnblock] = useUpdateStatusUnBlockMutation()

    const handleDelete = () => {
        if (selectedBox) {
            selectedBox.forEach((item) => deletePost(item))
            setSelectBox([])
        }
    }

    const handleBlock = () => {
        if (selectedBox) {
            selectedBox.forEach((item) => updateBlock(item))
        }
    }
    const handleUnBlock = () => {
        if (selectedBox) {
            selectedBox.forEach((item) => updateUnblock(item))
        }
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ITransition-4</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Button
                        className={style.btns}
                        variant="secondary"
                        onClick={handleBlock}
                    >
                        Block
                    </Button>{' '}
                    <SiAdblock
                        className={style.btns}
                        cursor="pointer"
                        color="#ffff"
                        size={35}
                        onClick={handleUnBlock}
                    />{' '}
                    <AiFillDelete
                        cursor="pointer"
                        color="#ffff"
                        size={35}
                        onClick={handleDelete}
                    />{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Toolbar
