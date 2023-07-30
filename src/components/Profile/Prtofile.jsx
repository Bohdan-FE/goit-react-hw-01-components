import PropTypes from 'prop-types';
import { ProfileContainer, Name, Tag, StatList, Location, Label, Quantity } from './Profile.styled';
import { IoLocationSharp } from 'react-icons/io5';


export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes
}) => {
  return (
    <ProfileContainer>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location><IoLocationSharp/>{location}</Location>
      </div>

      <StatList>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </StatList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};