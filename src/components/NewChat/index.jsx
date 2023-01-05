import { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const NewChat = ({ chatList, user, show, setShow }) => {
  const [list, setList] = useState([
    { id: 123, avatar: avatarImage, name: 'Alan Junqueira' },
    { id: 123, avatar: avatarImage, name: 'Alan Junqueira' },
    { id: 123, avatar: avatarImage, name: 'Alan Junqueira' },
    { id: 123, avatar: avatarImage, name: 'Alan Junqueira' }
  ]);

  return (
    <div className="newChat" style={{left: !show && -500}}>
      <div className="newChat--head">
        <button className="newChat--back-button" onClick={()=> setShow(false)}>
          <ArrowBackIcon fontSize="large" />
        </button>
        <h3 className="newChat--head-title">Nova Conversa</h3>
      </div>
      <div className="newChat--list">
        {list.map((iten, index) => (
          <div className="newChat--iten" key={index}>
            <img className="newChat--iten-avatar" src={iten.avatar} alt="" />
            <span className="newChat--iten-name">{iten.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
