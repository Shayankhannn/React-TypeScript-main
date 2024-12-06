import React from 'react'
import { adminInfoList } from './Types'


type adminInfoProp = {
    Admin: adminInfoList
}


const AdminInfo  = ({Admin} : adminInfoProp) => {
  return (
    <div>
<h2>Admin Information</h2>
<p>Admin Id: {Admin.id}</p>
<p>Admin Name: {Admin.name}</p>
<p>Admin Email: {Admin.email}</p>
<p>Admin Age: {Admin.age}</p>
<p>Admin Role: {Admin.role}</p>
    <p>Admin Role: {Admin.lastLogin.toLocaleString()}</p>


    </div>
  )
}

export default AdminInfo