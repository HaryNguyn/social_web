import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import MessageList from './components/MessageList';
import FriendRequests from './components/FriendRequests';
import ThemeModal from './components/ThemeModal';

function App() {
  const [showThemeModal, setShowThemeModal] = useState(false);

  const handleThemeClick = () => {
    setShowThemeModal(true);
  };

  const handleCloseTheme = () => {
    setShowThemeModal(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Sidebar onThemeClick={handleThemeClick} />
          <Feed />
          <div className="right">
            <MessageList />
            <FriendRequests />
          </div>
        </div>
      </main>
      <ThemeModal show={showThemeModal} onClose={handleCloseTheme} />
    </>
  );
}

export default App;

