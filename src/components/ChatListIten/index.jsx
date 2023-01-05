import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const ChatListIten = () => {
  return (
    <div className="chatListIten">
      <img className="chatListIten--avatar" src={avatarImage} alt="" />
      <div className="chatListIten--lines">
        <div className="chatListIten-line">
          <h3 className="chatListIten--name">Alan Junqueira</h3>
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
