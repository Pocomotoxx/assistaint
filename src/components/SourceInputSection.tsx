import React from 'react';

const SourceInputSection: React.FC = () => {
  return (
    <div>
      <h2>Knowledge Base Input</h2>
      <div>
        <label htmlFor="knowledgeBase">Paste your knowledge base here:</label>
        <textarea id="knowledgeBase" name="knowledgeBase" rows={10} style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default SourceInputSection;
