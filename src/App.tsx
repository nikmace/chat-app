import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ConversationPanel from 'components/ConversationPanel';
import PersonMsgReversed from 'components/PersonMsgReversed';

const socket = io('https://chat-appsrv.herokuapp.com/');

export interface Message {
  message: string;
}

export interface SocketMessage {
  id: string;
  message: string;
  sessionId: string;
}

export const App: React.FC = () => {
  const [message, setMessage] = useState<SocketMessage[]>([]);

  useEffect(() => {
    const handleMessage = (msg: SocketMessage) => {
      setMessage((prev) => [...prev, msg]);
      console.log(msg);
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

  const sendMsg = (msg: string) => {
    socket.emit('chat message', {
      type: 'message',
      value: msg,
    });
  };

  return (
    <div className="--dark-theme chat" id="chat">
      <div className="chat__conversation-board">
        {message.map((msg: SocketMessage) => (
          <PersonMsgReversed key={msg.id} message={msg.message} userId={msg.sessionId} />
        ))}
      </div>
      <ConversationPanel sendMsg={sendMsg} />
    </div>
  );
};
