import "./rightbar.css"
import { Users } from "../../dummyData"
import OnlineFriend from "../onlineFriend/OnlineFriend"
import ProfileFriend from "../profileFriend/ProfileFriend"

export default function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt=""/>
          <span className="birthdayText">
            <b>Chloe Decker</b> and <b>3 other friends</b> have birthdays today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <hr className="rightbarHr" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <div className="rightbarListContainer">
          <ul className="rightbarFriendList">
            {Users.map((u) => {
              return <OnlineFriend key={u.id} user={u} />
            })}
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          { Users.map((u) => {
            return <ProfileFriend key={u.id} user={u} />
          })}
        </div>
      </>
    )
  }
console.log({profile})
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
