import React, { useState } from 'react'

import TravelportLogo from '../../resources/images/Travelport-Logo.png'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName, Logo, AddButton } from './styles'

const ListOfUsers = ({ UserData }) => {
  const [listIndex, setIndex] = useState(0)
  const [users, setUsers] = useState([])

  const addUser = () => {
    if (listIndex < UserData.length) {
      setIndex(listIndex + 1)
      setUsers([...users, UserData[listIndex]])
    } else {
      setUsers(([]))
      setIndex(0)
    }
  }

  return (
    <Frame data-testid='usersList-frame' className='usersList-frame'>
      <Logo src={TravelportLogo} alt='travelport-logo' data-testid='usersList-logo' className='usersList-logo' />
      <UnorderedList data-testid='usersList-ul' className='usersList-ul'>
        {users.map((user, index) => {
          return (
            <ListItem key={index} data-testid='usersList-li' className='usersList-li'>
              <ImageItem src={user.picture.medium} data-testid='usersList-userImage' className='usersList-userImage' />
              <DataItem>
                <ItemName data-testid='usersList-name' className='usersList-name'>{user.name.first} {user.name.last}</ItemName>
                <p data-testid='usersList-email' className='usersList-email'>{user.email}</p>
              </DataItem>
            </ListItem>
          )
        })}
      </UnorderedList>
      <AddButton onClick={addUser} data-testid='usersList-button' className='usersList-button'>
        Add User
      </AddButton>
    </Frame>
  )
}

export default ListOfUsers
