import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareTopImg" src="/assets/person/2.jpeg" alt=""/>
                <input 
                    className="shareInput" 
                    placeholder="Whats on your mind melvinthomasdev" 
                />
            </div>
            <hr className="shareHr"></hr>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareOptionIcon" htmlColor='tomato' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label className="shareOptionIcon" htmlColor='blue' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className="shareOptionIcon" htmlColor='green' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className="shareOptionIcon" htmlColor='goldenrod' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
