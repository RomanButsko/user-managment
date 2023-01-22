import { format, formatDistance, subDays } from 'date-fns'
import { FC } from 'react'
import Table from 'react-bootstrap/Table'

import DropDown from '../DropDown/DropDown'
import style from './Table.module.css'
import { ITable } from './table.interface'

const UserTable: FC<ITable> = ({ data, selectedBox, setSelectBox }) => {
    const formatDate = (date: Date) => String(format(date, 'dd/MM/yyyy'))
    const formatDateLastVisit = (date: Date) =>
        String(
            formatDistance(subDays(date, 0), new Date(), { addSuffix: true })
        )

    const handleCheckbox = (
        elem: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name } = e.target
        if (name === 'allSelect') {
            let tempUser =
                data &&
                data.map((user) => {
                    return user.id
                })
            setSelectBox(tempUser || [])
        } else if (name === 'removeAll') {
            setSelectBox([])
        } else if (!selectedBox.includes(elem)) {
            setSelectBox([...selectedBox, elem])
        } else {
            setSelectBox(selectedBox.filter((item) => item !== elem))
        }
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr className={style.header}>
                    <th>
                        <DropDown handleCheckbox={handleCheckbox} />
                    </th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of registration</th>
                    <th>Date of last visit</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((elem) => {
                    return (
                        <tr className={style.container} key={elem.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleCheckbox(elem.id, e)}
                                    checked={selectedBox.includes(elem.id)}
                                />
                            </td>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{formatDate(new Date(elem.register))}</td>
                            <td>
                                {formatDateLastVisit(new Date(elem.lastVisit))}
                            </td>
                            <td>{elem.status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default UserTable
