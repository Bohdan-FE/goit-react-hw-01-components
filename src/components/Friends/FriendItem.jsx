import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
    avarar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}