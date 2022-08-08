import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Toaster } from 'react-hot-toast';

import ConversationPanel from 'components/ConversationPanel';
import PersonMsgReversed from 'components/PersonMsgReversed';
import { User } from 'utils/getUser';

const socket = io('https://chat-appsrv.herokuapp.com/'); // https://chat-appsrv.herokuapp.com/

export interface Message {
  message: string;
}

export interface SocketMessage {
  id: string;
  message: string;
  username: string;
  sex: string;
  sessionId: string;
}

export const App: React.FC = () => {
  const [message, setMessage] = useState<SocketMessage[]>([]);

  useEffect(() => {
    const handleMessage = (msg: SocketMessage) => {
      setMessage((prev) => [...prev, msg]);
    };

    socket.on('connection', () => {
      console.log('Connection established');
    });

    socket.on('chat message', handleMessage);

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    return () => {
      socket.off('connection');
      socket.off('disconnect');
      socket.off('chat message');
    };
  }, []);

  const sendMsg = (msg: string, u: User) => {
    socket.emit('chat message', {
      type: 'message',
      value: {
        message: msg,
        ...u,
      },
    });
  };

  return (
    <div className="--dark-theme chat" id="chat">
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 4000,
          success: {
            style: {
              padding: '8px',
            },
          },
        }}
      />
      <div className="chat__conversation-board">
        {message.map((msg: SocketMessage) => (
          <PersonMsgReversed
            key={msg.id}
            message={msg.message}
            userId={msg.sessionId}
            username={msg.username}
            sex={msg.sex}
          />
        ))}
      </div>
      <ConversationPanel sendMsg={sendMsg} />
    </div>
  );
};
