import user from 'data/user.json'
import dataStatisctic from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

import Profile from 'components/Profile/Profile';
import SectionStatictic from 'components/SectionStatistic/SectionStatistic';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';


// import css from './App.module.css'

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <SectionStatictic
        stats={dataStatisctic}
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};

export default App;
