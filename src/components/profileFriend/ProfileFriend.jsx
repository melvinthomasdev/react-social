import "./profileFriend.css"

export default function ProfileFriend({ user }) {
  return (
    <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={user.profilePicture} alt="" />
        <span className="rightbarFollowingName">{user.username}</span>
    </div>
  )
}
