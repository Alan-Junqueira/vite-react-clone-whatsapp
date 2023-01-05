import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import avatarImage from '../../assets/avatar.png';

import './styles.css';

export const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--header-info">
          <img src={avatarImage} alt="" className="chatWindow--avatar" />
          <h3 className="chatWindow--name">Alan Junqueira</h3>
        </div>
        <div className="chatWindow--header-buttons">
          <button className="chatWindow--button">
            <SearchIcon fontSize='large'/>
          </button>
          <button className="chatWindow--button">
            <AttachFileIcon fontSize='large'/>
          </button>
          <button className="chatWindow--button">
            <MoreVertIcon fontSize='large'/>
          </button>
        </div>
      </div>
      <div className="chatWindow--body">

      </div>
      <div className="chatWindow--footer">
        
      </div>
    </div>
  );
};
