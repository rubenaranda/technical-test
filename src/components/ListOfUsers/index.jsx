import React, { useState } from 'react'
import GetApiData from '../GetApiData'

import TravelportLogo from '../../resources/images/Travelport-Logo.png'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName, AddButton, Logo } from './styles'

const baseURL = 'https://randomuser.me/api/?results=5'

const ListOfUsers = () => {
  const apiData = GetApiData(baseURL)
  const [listIndex, setIndex] = useState(0)
  const [users, setUsers] = useState([])

  const addUser = () => {
    if (listIndex < apiData.results.length) {
      setIndex(listIndex + 1)
      setUsers([...users, apiData.results[listIndex]])
    } else {
      setUsers(([]))
      setIndex(0)
    }
  }
  return (
    <Frame>
      <Logo src={TravelportLogo} alt='travelport-logo' />
      <UnorderedList>
        {users.map((user, index) =>
          <ListItem key={index}>
            <ImageItem src={user.picture.medium} alt='profilePicture' />
            <DataItem>
              <ItemName>{user.name.first} {user.name.last}</ItemName>
              <p>{user.email}</p>
            </DataItem>
          </ListItem>
        )}
      </UnorderedList>
      <AddButton onClick={addUser}>
        Add User
      </AddButton>
    </Frame>
  )
}

export default ListOfUsers
