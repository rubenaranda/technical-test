
import TravelportLogo from '../../resources/images/Travelport-Logo.png'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName, Logo } from './styles'

const ListOfUsers = ({ UserData }) => {
  return (
    <Frame>
      <Logo src={TravelportLogo} alt='travelport-logo' />
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
