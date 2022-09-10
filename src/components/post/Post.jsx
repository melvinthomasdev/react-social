import { MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  console.log(post.img);
  const user = Users.filter((u) => u.id === post.userId)[0];

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user.profilePicture} alt="" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date} </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">
              {" "}
              {post.like} people like this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
