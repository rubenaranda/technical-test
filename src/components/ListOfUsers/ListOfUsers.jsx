import React, { useState } from 'react'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName } from './styles'

const ListOfUsers = ({ UserData, selectedUsers = [] }) => {
  const [listIndex, setIndex] = useState(0)

  return (
    <Frame>
      <h1>List Test</h1>
      <UnorderedList>
        {UserData.map((user, index) => {
          if (index === listIndex) {
            return [...selectedUsers,
              <ListItem key={index}>
                <ImageItem src={user.picture.medium} alt='profilePicture' />
                <DataItem>
                  <ItemName>{user.name.first} {user.name.last}</ItemName>
                  <p>{user.email}</p>
                </DataItem>
              </ListItem>
            ]
          }
          return null
        })}
      </UnorderedList>
      <button onClick={() => { setIndex(listIndex + 1) }}>
        next
      </button>
    </Frame>
  )
}

export default ListOfUsers
