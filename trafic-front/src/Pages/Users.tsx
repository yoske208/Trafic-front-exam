import React, { useContext } from 'react'
import DisplayUserrComp from '../Components/Users/DisplayUserrComp'
import { UserConntext } from '../Provider/UserProvider'

const Users = () => {
    const {users} = useContext(UserConntext)
  return (
    <div>
        <DisplayUserrComp users={users}/>
    </div>
  )
}

export default Users