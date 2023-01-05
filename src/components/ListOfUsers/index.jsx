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
    <Frame>
      <Logo src={TravelportLogo} alt='travelport-logo' />
      <UnorderedList>
        {users.map((user, index) => {
          return (
            <ListItem key={index}>
              <ImageItem src={user.picture.medium} />
              <DataItem>
                <ItemName>{user.name.first} {user.name.last}</ItemName>
                <p>{user.email}</p>
              </DataItem>
            </ListItem>
          )
        })}
      </UnorderedList>
      <AddButton onClick={addUser}>
        Add User
      </AddButton>
    </Frame>
  )
}

export default ListOfUsers
