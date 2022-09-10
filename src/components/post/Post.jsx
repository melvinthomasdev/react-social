import { MoreVert } from '@material-ui/icons'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src='/assets/person/8.jpeg' alt=''/>
                    <span className='postUsername'>Melissa Miller</span>
                    <span className='postDate'>2 days ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>Hey this is my first post...</span>
                <img className='postImg' src='/assets/post/1.jpeg' alt=''/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className="likeIcon" src='/assets/like.png' alt=''/>
                    <img className="likeIcon" src='/assets/heart.png' alt=''/>
                    <span className='postLikeCounter'> 32 Likes</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>9 Comments</span>
                </div>
            </div>
        </div>        
    </div>
  )
}
