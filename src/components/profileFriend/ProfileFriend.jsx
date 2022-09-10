import "./profileFriend.css"

export default function ProfileFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={PF+user.profilePicture} alt="" />
        <span className="rightbarFollowingName">{user.username}</span>
    </div>
  )
}
