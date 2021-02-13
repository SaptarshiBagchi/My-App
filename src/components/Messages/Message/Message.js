import "./Message.css";

import ReactEmoji from "react-emoji";
import pokemontrainer from "../../../icons/pokemontrainer.png";
import avatar from "../../../icons/avatar.png";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer mt-10 justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>

      <img
        src={avatar}
        height="30px"
        width="30px"
        className="incominguser-icon"
      />
    </div>
  ) : (
    <div className="messageContainer mt-10 justifyStart">
      <img
        src={pokemontrainer}
        height="30px"
        width="30px"
        className="user-icon"
      />
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
