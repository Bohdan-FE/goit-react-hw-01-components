import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(obj => (
        <FriendListItem
          key={obj.id}
          avatar={obj.avatar}
          name={obj.name}
          isOnline={obj.isOnline}
        ></FriendListItem>
      ))}
    </List>
  );
};

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })),
};
