import React from 'react';

const EmbedOptionsSection: React.FC = () => {
  const embedCode = '<!-- Chatbot Embed Code Will Appear Here -->';

  return (
    <div>
      <h2>Embed Your Chatbot</h2>
      <pre>
        <code>{embedCode}</code>
      </pre>
      <button type="button">Copy Code</button>
    </div>
  );
};

export default EmbedOptionsSection;
