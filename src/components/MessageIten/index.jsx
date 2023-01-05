import './style.css';

export const MessageIten = ({ data, user }) => {
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
      }}
    >
      <div
        className="messageIten"
        style={{
          backgroundColor:
            user.id === data.author
              ? 'var(--message-iten-user)'
              : 'var(--white)'
        }}
      >
        <p className="messageText">{data.body}</p>
        <span className="messageDate">19:00</span>
      </div>
    </div>
  );
};
