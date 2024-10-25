const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;