import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { User } from 'utils/getUser';

interface PanelProps {
  sendMsg: (msg: string, u: User) => void;
}

const ConversationPanel: React.FC<PanelProps> = ({ sendMsg }) => {
  const [message, setMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleKeypress = (event: any) => {
    // It triggers by pressing the enter key
    const { key } = event;
    if (key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // TODO: Wrap this with Redux logic
    // let u = getUser();
    // if (!u) {
    //   if (username.length > 2) {
    //     u = setUser({ username, sex: 'male' });
    //   } else {
    //     toast.error('Username cannot be empty or less than 2 characters');
    //   }
    // }

    if (message.length > 0 && username.length > 2) {
      sendMsg(message, { username, sex: 'male' });
      setMessage('');
    } else {
      toast.error('Message cannot be empty');
    }
  };

  return (
    <div className="chat__conversation-panel">
      <div className="chat__conversation-panel__container">
        <button
          type="button"
          className="chat__conversation-panel__button panel-item btn-icon add-file-button"
        >
          <svg
            className="feather feather-plus sc-dnqmqq jxshSx"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button
          type="button"
          className="chat__conversation-panel__button panel-item btn-icon emoji-button"
        >
          <svg
            className="feather feather-smile sc-dnqmqq jxshSx"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </button>
        <input
          className="chat__conversation-panel__input panel-item"
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyPress={handleKeypress}
        />
        <input
          className="chat__conversation-panel__input panel-item"
          placeholder="Your username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button
          type="button"
          className="chat__conversation-panel__button panel-item btn-icon send-message-button"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            data-reactid="1036"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ConversationPanel;
