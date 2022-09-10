import React from "react";
import "./onlineFriend.css"

export default function OnlineFriend({user}) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src={user.profilePicture}
            alt=""
          />
          <span className="rightbarOnlineBadge"></span>
        </div>
        <span className="rightbarUsername">{user.username} </span>
      </li>
    </div>
  );
}
