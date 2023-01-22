import { FC } from 'react'
import { Dropdown } from 'react-bootstrap'

import { IDropDown } from './dropDown.interface'

const DropDown: FC<IDropDown> = ({ handleCheckbox }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark">Select</Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Dropdown.Item
                    name="allSelect"
                    onClick={(e) => handleCheckbox(4, e)}
                >
                    All
                </Dropdown.Item>
                <Dropdown.Item
                    name="removeAll"
                    onClick={(e) => handleCheckbox(4, e)}
                >
                    Remove all
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown
