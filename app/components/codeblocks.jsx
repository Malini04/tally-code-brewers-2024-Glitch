import React from 'react';

// Utility function to escape HTML characters
const escapeHtml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br/>')
    .replace(/ {2}/g, '&nbsp;&nbsp;'); // Optionally replace spaces with non-breaking spaces
};

const CodeBlock = ({ code }) => {
  const escapedCode = escapeHtml(code);
  
  return (
    <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
      <code dangerouslySetInnerHTML={{ __html: escapedCode }} />
    </pre>
  );
};

export default CodeBlock;
