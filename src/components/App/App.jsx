import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../Friends/friends.json';
import transactions from '../TransactionHistory/transactions.json';
import { Profile } from '../Profile/Prtofile';
import { Statistics } from '../Statistics/Statisticts';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
