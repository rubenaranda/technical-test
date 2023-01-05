
import TravelportLogo from '../../resources/images/Travelport-Logo.png'
import { Frame, UnorderedList, ListItem, DataItem, ImageItem, ItemName, Logo } from './styles'

const ListOfUsers = ({ UserData }) => {
  return (
    <Frame data-testid='usersList-frame' className='usersList-frame'>
      <Logo src={TravelportLogo} alt='travelport-logo' data-testid='usersList-logo' className='usersList-logo' />
      <UnorderedList data-testid='usersList-ul' className='usersList-ul'>
        {UserData.map((user, index) =>
          <ListItem key={index} data-testid='usersList-li' className='usersList-li'>
            <ImageItem src={user.picture.medium} alt='profilePicture' data-testid='usersList-userImage' className='usersList-userImage' />
            <DataItem>
              <ItemName data-testid='usersList-name' className='usersList-name'>{user.name.first} {user.name.last}</ItemName>
              <p data-testid='usersList-email' className='usersList-email'>{user.email}</p>
            </DataItem>
          </ListItem>
        )}
      </UnorderedList>
    </Frame>
  )
}

export default ListOfUsers
