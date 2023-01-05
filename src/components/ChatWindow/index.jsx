import { useState, useEffect, useRef } from 'react';
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
import { MessageIten } from '../MessageIten';

export const ChatWindow = ({ user }) => {
  const body = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [list, setList] = useState([
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' },
    { author: 123, body: 'Bla bla bla' },
    { author: 123, body: 'Bla bla ' },
    { author: 1234, body: 'Bla bla bla bla' }
  ]);

  const [listening, setListening] = useState(false);

  function handleEmojiClick(e) {
    setText(text + e.emoji);
  }

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  function handleMicClick() {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  }

  function handleSendClick() {}

  useEffect(() => {
    //* Conteúdo da div, é maior que altura disponível da div?
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

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
      <div ref={body} className="chatWindow--body">
        {list.map((iten, index) => (
          <MessageIten key={index} data={iten} user={user} />
        ))}
      </div>
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
              style={{ color: emojiOpen && 'var(--chat-window-emoji-open)' }}
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
          {!text ? (
            <button className="chatWindow--button" onClick={handleMicClick}>
              <MicIcon
                fontSize="large"
                style={{ color: listening && 'var(--chat-window-mic-open)' }}
              />
            </button>
          ) : (
            <button className="chatWindow--button" onClick={handleSendClick}>
              <SendIcon fontSize="large" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
