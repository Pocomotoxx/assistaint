import React from 'react';

interface KnowledgeBasePreviewProps {
  knowledgeBaseText: string;
}

const KnowledgeBasePreview: React.FC<KnowledgeBasePreviewProps> = ({ knowledgeBaseText }) => {
  return (
    <div>
      <h2>Knowledge Base Preview</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px', whiteSpace: 'pre-wrap' }}>
        {knowledgeBaseText}
      </div>
      <button type="button">Edit</button>
    </div>
  );
};

export default KnowledgeBasePreview;
