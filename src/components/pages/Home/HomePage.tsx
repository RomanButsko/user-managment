import { useState } from 'react'

import { useActions } from '../../../hook/useActions'
import { useAuth } from '../../../hook/useAuth'
import { useGetUsersQuery } from '../../../store/api/api'
import Auth from '../../authModal/AuthItem'
import UserTable from '../../table/Table'
import Toolbar from '../../toolbar/Toolbar'

const HomePage = () => {
    const [selectedBox, setSelectBox] = useState<number[]>([])

    const { data } = useGetUsersQuery()

    const userData = useAuth()

    const { hasAccess } = useActions()

    userData.user && hasAccess(userData.user.email)

    return (
        <>
            {userData.hasAccess ? (
                <>
                    <Toolbar
                        selectedBox={selectedBox}
                        setSelectBox={setSelectBox}
                    />
                    <UserTable
                        data={data}
                        setSelectBox={setSelectBox}
                        selectedBox={selectedBox}
                    />
                </>
            ) : (
                <Auth />
            )}
        </>
    )
}

export default HomePage