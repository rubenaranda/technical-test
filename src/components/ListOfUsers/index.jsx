import React, { useState } from 'react'
import GetApiData from '../GetApiData'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName } from './styles'

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
      <h1>List Test</h1>
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
      <button onClick={addUser}>
        next
      </button>
    </Frame>
  )
}

export default ListOfUsers
