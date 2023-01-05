import { useState, useEffect } from 'react';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import { ChatListIten } from '../../components/ChatListIten';
import { ChatIntro } from '../../components/ChatIntro';
import { ChatWindow } from '../../components/ChatWindow';

import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const Home = () => {
  const [chatList, setChatList] = useState([
    { chatId: 1, title: 'Fulano de Tal', avatar: avatarImage },
    { chatId: 2, title: 'Fulano de Tal', avatar: avatarImage },
    { chatId: 3, title: 'Fulano de Tal', avatar: avatarImage },
    { chatId: 4, title: 'Fulano de Tal', avatar: avatarImage },
    { chatId: 5, title: 'Fulano de Tal', avatar: avatarImage },
    { chatId: 6, title: 'Fulano de Tal', avatar: avatarImage }
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: avatarImage,
    name: 'Alan Junqueira'
  });

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <button className="header--button">
              <DonutLargeIcon fontSize="large" />
            </button>
            <button className="header--button">
              <ChatIcon fontSize="large" />
            </button>
            <button className="header--button">
              <MoreVertIcon fontSize="large" />
            </button>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="medium" />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <section className="chat-list">
          {chatList.map((iten, index) => (
            <ChatListIten
              key={index}
              data={iten}
              active={activeChat.chatId === chatList[index].chatId}
              onClick={() => setActiveChat(chatList[index])}
            />
          ))}
        </section>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined ? (
          <ChatWindow user={user} />
        ) : (
          <ChatIntro />
        )}
      </div>
    </div>
  );
};
