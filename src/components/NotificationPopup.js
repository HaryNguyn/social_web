import React from 'react';

const NotificationPopup = ({ show }) => {
  if (!show) return null;

  const notifications = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      body: <><b>Keke Benjamin</b> accepted your friend requerst</>,
      time: '2 DAYS AGO'
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      body: <><b>Mary Opong</b> and <b>283 orthers</b> thich bai viet cua ban</>,
      time: '2 DAYS AGO'
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      body: <><b>Jonh Doe</b> binh luan bai viet cua ban</>,
      time: '1 hour AGO'
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      body: <><b>Keke Benjamin</b> binh luan bai viet cua ban</>,
      time: '4 hour AGO'
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      body: <><b>black Obama</b> accepted your friend requerst</>,
      time: '3 DAYS AGO'
    }
  ];

  return (
    <div className={`notifications-popup ${show ? 'show' : ''}`}>
      {notifications.map(notif => (
        <div key={notif.id}>
          <div className="profile-photo">
            <img src={notif.img} alt="Profile" />
          </div>
          <div className="notifiactions-body">
            {notif.body}
            <small className="text-muted">{notif.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationPopup;

