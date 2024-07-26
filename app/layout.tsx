
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <h1>DojoConnect</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 DojoConnect</p>
      </footer>
    </div>
  );
};

export default Layout;
