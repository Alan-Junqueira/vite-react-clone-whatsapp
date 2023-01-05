import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const ChatListIten = ({ onClick, active, data }) => {
  return (
    <div className={`chatListIten ${active ? 'active' : ''}`} onClick={onClick}>
      <img className="chatListIten--avatar" src={data.avatar} alt="" />
      <div className="chatListIten--lines">
        <div className="chatListIten-line">
          <h3 className="chatListIten--name">{data.title}</h3>
          <span className="chatListIten--date">19:00</span>
        </div>
        <div className="chatListIten-line">
          <div className="chatListIten--last-message">
            <p>Opa, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
