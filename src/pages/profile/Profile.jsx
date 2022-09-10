import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">
            <img src="assets/post/4.jpeg" alt="" className="profileCoverImg" />
            <img src="assets/person/5.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Melvin Thomas</h4>
            <span className="profileInfoDesc">Hello this is @melvinthomasdev</span>
          </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  )
}
