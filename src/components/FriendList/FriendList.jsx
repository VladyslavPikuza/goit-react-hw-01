
import FriendListItem from './FriendListItem.jsx';
import s from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
