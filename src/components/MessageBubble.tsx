import React from 'react';

export type MessageSender = "user" | "bot";

interface MessageBubbleProps {
  text: string;
  sender: MessageSender;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender }) => {
  const bubbleStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '5px',
    maxWidth: '70%',
    color: 'white',
  };

  const userStyle: React.CSSProperties = {
    ...bubbleStyle,
    backgroundColor: '#007bff', // Blue for user
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  };

  const botStyle: React.CSSProperties = {
    ...bubbleStyle,
    backgroundColor: '#28a745', // Green for bot
    alignSelf: 'flex-start',
    marginRight: 'auto',
  };

  return (
    <div style={sender === 'user' ? userStyle : botStyle}>
      {text}
    </div>
  );
};

export default MessageBubble;
