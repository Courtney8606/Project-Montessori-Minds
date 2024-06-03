import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
      <div className="content">
        {children}
      </div>
      </Container>
    </div>
  );
};

export default Layout;