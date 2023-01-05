import { useState, useEffect } from 'react';

import avatarImage from '../../assets/avatar.png';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';
import { ChatListIten } from '../../components/ChatListIten';

export const Home = () => {
  const [chatList, setChatList] = useState([{}, {}, {}, {}]);
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src={avatarImage} alt="" />
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
            <SearchIcon font-fontSize="small" />
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
              
            />
          ))}
        </section>
      </div>
      <div className="content-area">...</div>
    </div>
  );
};
