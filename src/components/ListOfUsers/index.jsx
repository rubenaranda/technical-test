import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName, Title } from './styles'

const ListOfUsers = ({ UserData }) => {
  return (
    <Frame>
      <Title>List Test</Title>
      <UnorderedList>
        {UserData.map((user, index) =>
          <ListItem key={index}>
            <ImageItem src={user.picture.medium} alt='profilePicture' />
            <DataItem>
              <ItemName>{user.name.first} {user.name.last}</ItemName>
              <p>{user.email}</p>
            </DataItem>
          </ListItem>
        )}
      </UnorderedList>
    </Frame>
  )
}

export default ListOfUsers
