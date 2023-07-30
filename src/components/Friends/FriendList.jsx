import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(obj => (
        <FriendItem
          key={obj.id}
          avatar={obj.avatar}
          name={obj.name}
          isOnline={obj.isOnline}
        ></FriendItem>
      ))}
    </ul>
  );
};

FriendList.propType = {
  friends: PropTypes.array,
};
