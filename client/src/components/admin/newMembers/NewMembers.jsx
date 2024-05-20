import React, { useEffect, useState } from 'react'
import "./newMembers.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../../utilities/requestMethod';
function NewMembers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [])

  return (
    <div className='new-members-container'>
      <h3>New Join Members</h3>
      {users.map(user => (
        <div key={user._id} className='member-card'>
          <img src={user.img || "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"} alt="" />
          <div className='member-info'>
            <p className='member-name'>{user.username}</p>
            <p className='member-title'>{user.email}</p>
          </div>
          <div className='display-btn'><VisibilityIcon /> Display</div>
        </div>
      ))}
    </div>
  )
}

export default NewMembers