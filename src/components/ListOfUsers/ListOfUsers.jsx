import{ Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName } from './styles'

const ListOfUsers = ({ UserData }) => {
  return (
    <Frame>
      <h1>List Test</h1>
      <UnorderedList>
      {UserData.map(user =>
      <ListItem>
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
