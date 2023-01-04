import React, { useState } from 'react'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName } from './styles'

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
      <h1>List Test</h1>
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
      <button onClick={addUser}>
        next
      </button>
    </Frame>
  )
}

export default ListOfUsers
