import "./closeFriend.css";

export default function CloseFriend(user) {
  return (
    <div>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.user.username} </span>
      </li>
    </div>
  );
}
