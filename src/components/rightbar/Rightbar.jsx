import "./rightbar.css"
import { Users } from "../../dummyData"
import OnlineFriend from "../onlineFriend/OnlineFriend"

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
              return <OnlineFriend key={u.di} user={u} />
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
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/7.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
console.log({profile})
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {/* todo: this logic needs correction  */}
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
