import "./rightbar.css"
import { Users } from "../../dummyData"
import OnlineFriend from "../onlineFriend/OnlineFriend"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}
