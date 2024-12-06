import React from 'react'
import UserInfo from './UserInfo'
import AdminInfo from './AdminInfo'
import { adminInfoList, info } from './Types'

const Main = () => {
  
  const User : info = {
    id:1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 22,

  }

  const Admin : adminInfoList = {
    id: 2,
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    role:"admin",
    lastLogin: new Date(),
  }
  
    return (
    <div>

<UserInfo User={User} />
<AdminInfo Admin={Admin} />


    </div>
  )
}

export default Main