import userData from '../../data/userData.json'
import friendsData from '../../data/friendsData.json'
import transactionHistoryData from '../../data/transactionHistoryData.json';
import Friends from '../Friends/Friends';
import Profile from '../Profile/Profile';
import TransactionHistory from '../Transactions/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Friends friends={friendsData} />
      <TransactionHistory items={transactionHistoryData} />
    </>
  )
}

export default App
