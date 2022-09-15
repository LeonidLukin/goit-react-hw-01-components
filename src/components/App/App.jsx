import Stats from 'components/Stats/Stats';
import UserData from 'components/UserData/UserData';
import user from 'user.json'
import Avatar from "../Avatar/Avatar";
import css from './App.module.css'

const App = () => {
  return (
    <div className={css.profile}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div className="description">
        <Avatar
          avatar={user.avatar}
          username={user.username}
        />
        <UserData
          username={user.username}
          tag={user.tag}
          location={user.location}
        />
      </div>

      <ul className="stats">
        <Stats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </ul>
    </div>
  );
};

export default App;
