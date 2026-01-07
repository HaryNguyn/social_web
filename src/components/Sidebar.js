import React, { useState } from 'react';
import NotificationPopup from './NotificationPopup';

const Sidebar = ({ onThemeClick }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNotificationCount, setShowNotificationCount] = useState(true);

  const menuItems = [
    { id: 'home', icon: 'uil-home', label: 'Home' },
    { id: 'explore', icon: 'uil-compass', label: 'Explore' },
    { id: 'notifications', icon: 'uil-bell', label: 'Notifiactions', badge: '7+' },
    { id: 'messages', icon: 'uil-envelope-alt', label: 'Messagse', badge: '6' },
    { id: 'bookmarks', icon: 'uil-bookmark', label: 'Bookmarks' },
    { id: 'analytics', icon: 'uil-chart-line', label: 'Analytics' },
    { id: 'theme', icon: 'uil-palette', label: 'Theme' },
    { id: 'settings', icon: 'uil-setting', label: 'Setting' }
  ];

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    
    if (itemId === 'notifications') {
      setShowNotifications(true);
      setShowNotificationCount(false);
    } else {
      setShowNotifications(false);
    }

    if (itemId === 'theme') {
      onThemeClick();
    }
  };

  return (
    <div className="left">
      <a className="profile">
        <div className="profile-photo">
          <img 
            src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/260307040_767908151274932_8586910889995926825_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ymXZR8ykcAAQ7kNvgHHAr9_&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A_QJ9xMV6mrjY2FdzElYeNb&oh=00_AYA9nwDjwZortQteUgaZrlxjZnNWVYiBPDCotTMw6laI6w&oe=66E8D83A" 
            alt="Profile"
          />
        </div>
        <div className="handle">
          <h4>Min Hai</h4>
          <p className="text-muted">@harri</p>
        </div>
      </a>

      {/* SIDEBAR */}
      <div className="sidebar">
        {menuItems.map((item) => (
          <a 
            key={item.id}
            className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
            style={{ position: 'relative' }}
          >
            <span>
              <i className={`uil ${item.icon}`}>
                {item.badge && showNotificationCount && item.id === 'notifications' && (
                  <small className="notification-count">{item.badge}</small>
                )}
                {item.badge && item.id === 'messages' && (
                  <small className="notification-count">{item.badge}</small>
                )}
              </i>
            </span>
            <h3>{item.label}</h3>
            {item.id === 'notifications' && (
              <NotificationPopup show={showNotifications && activeItem === 'notifications'} />
            )}
          </a>
        ))}
      </div>
      {/* END OF SIDEBAR */}
      <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
    </div>
  );
};

export default Sidebar;

