import React from 'react';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header aria-label="Dashboard Header">
        <h1 className="text-2xl font-bold">Dashboard Layout</h1>
      </header>
      <main className="my-4" role="main">
        {children}
      </main>
      <footer aria-label="Dashboard Footer" className="mt-4">
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
