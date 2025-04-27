import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
