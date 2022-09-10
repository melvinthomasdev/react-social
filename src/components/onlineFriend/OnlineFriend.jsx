import React from "react";
import "./onlineFriend.css"

export default function OnlineFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src={PF+user.profilePicture}
            alt=""
          />
          <span className="rightbarOnlineBadge"></span>
        </div>
        <span className="rightbarUsername">{user.username} </span>
      </li>
    </div>
  );
}
