import React from 'react'
import { info } from './Types'

type userInfoProp = {
    User: info;
}
const UserInfo : React.FC<userInfoProp> = ({User}) => {



    return (
    <div>
<h2>User Information</h2>
<h4>{User.id}</h4>
<h4>{User.name}</h4>
<h4>{User.age}</h4>
<h4>{User.email}</h4>

    </div>
  )
}

export default UserInfo