import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { List } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(obj => (
        <FriendItem
          key={obj.id}
          avatar={obj.avatar}
          name={obj.name}
          isOnline={obj.isOnline}
        ></FriendItem>
      ))}
    </List>
  );
};

FriendList.propType = {
  friends: PropTypes.array,
};
