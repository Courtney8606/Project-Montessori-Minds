import React from 'react';

const TestPage = ({ test }) => {
  return (
    <div>
      <h1>Test Page</h1>
      {test.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TestPage;