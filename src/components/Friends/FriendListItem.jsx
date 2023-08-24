import PropTypes from 'prop-types';
import { OnlineIndicator } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <OnlineIndicator isOnline={isOnline}></OnlineIndicator>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avarar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
