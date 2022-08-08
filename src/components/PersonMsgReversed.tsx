import React from 'react';

const PersonMsgReversed: React.FC<{
  message: string;
  userId: string;
  username: string;
  sex: string;
}> = ({ message, userId, username, sex }) => {
  return (
    <div className="chat__conversation-board__message-container reversed">
      <div className="chat__conversation-board__message__person">
        <div className="chat__conversation-board__message__person__avatar">
          <img
            src="https://cdn1.vectorstock.com/i/thumb-large/84/50/profile-icon-female-head-in-chat-bubble-isolated-vector-23798450.jpg"
            alt="Dennis Mikle"
          />
        </div>
        <span className="chat__conversation-board__message__person__nickname">
          {username}
        </span>
      </div>
      <div className="chat__conversation-board__message__context">
        <div className="chat__conversation-board__message__bubble">
          <span>{message}</span>
        </div>
      </div>
      <div className="chat__conversation-board__message__options">
        <button
          type="button"
          className="btn-icon chat__conversation-board__message__option-button option-item emoji-button"
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
        <button
          type="button"
          className="btn-icon chat__conversation-board__message__option-button option-item more-button"
        >
          <svg
            className="feather feather-more-horizontal sc-dnqmqq jxshSx"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PersonMsgReversed;
