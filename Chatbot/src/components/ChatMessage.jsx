import userImage from '../assets/user.png';
import robotImage from '../assets/robot.png';
import './ChatMessage.css'

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "user-text" : "robot-text"}>
      {sender === "robot" && <img src={robotImage} className="message-img" />}
      <div className="text">{message}</div>
      {sender === "user" && <img src={userImage} className="message-img" />}
    </div>
  );
}

export default ChatMessage;
