import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');

  function handleEmojiClick(e) {
    console.log(e.emoji);
    setText(text + e.emoji);
  }
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--header-info">
          <img src={avatarImage} alt="" className="chatWindow--avatar" />
          <h3 className="chatWindow--name">Alan Junqueira</h3>
        </div>
        <div className="chatWindow--header-buttons">
          <button className="chatWindow--button">
            <SearchIcon fontSize="large" />
          </button>
          <button className="chatWindow--button">
            <AttachFileIcon fontSize="large" />
          </button>
          <button className="chatWindow--button">
            <MoreVertIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div
        className="chatWindow--emoji-area"
        style={{ height: emojiOpen ? '20rem' : '0' }}
      >
        <EmojiPicker
          searchDisabled
          skinTonesDisabled
          onEmojiClick={handleEmojiClick}
          previewConfig={{ showPreview: false }}
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <button
            className="chatWindow--button"
            onClick={() => setEmojiOpen(false)}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon fontSize="large" />
          </button>
          <button className="chatWindow--button">
            <InsertEmoticonIcon
              fontSize="large"
              onClick={() => setEmojiOpen(true)}
              style={{ color: emojiOpen && '#009688' }}
            />
          </button>
        </div>
        <div className="chatWindow--input-area">
          <input
            type="text"
            className="chatWindow-input"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          <button className="chatWindow--button">
            <SendIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};
