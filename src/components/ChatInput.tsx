import React from 'react';

const ChatInput: React.FC = () => {
  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <input type="text" placeholder="Type your message..." style={{ flexGrow: 1, marginRight: '5px' }} />
      <button type="button">Send</button>
    </div>
  );
};

export default ChatInput;
