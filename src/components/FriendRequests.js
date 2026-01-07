import React from 'react';

const FriendRequests = () => {
  const requests = [
    {
      id: 1,
      name: 'Tuan Dang',
      image: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      mutualFriends: '8 bạn chung'
    },
    {
      id: 2,
      name: 'Bguyen Minh Duong',
      image: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      mutualFriends: '8 bạn chung'
    },
    {
      id: 3,
      name: 'Vu Dung',
      image: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      mutualFriends: '8 bạn chung'
    }
  ];

  const handleAccept = (id) => {
    console.log('Accept request:', id);
  };

  const handleDecline = (id) => {
    console.log('Decline request:', id);
  };

  return (
    <div className="friend-requests">
      <h4>Requests</h4>
      {requests.map((request) => (
        <div key={request.id} className="requests">
          <div className="info">
            <div className="profile-photo">
              <img src={request.image} alt={request.name} />
            </div>
            <div>
              <h5>{request.name}</h5>
              <p className="text-muted">{request.mutualFriends}</p>
            </div>
          </div>
          <div className="action">
            <button 
              className="btn btn-primary"
              onClick={() => handleAccept(request.id)}
            >
              Accept
            </button>
            <button 
              className="btn"
              onClick={() => handleDecline(request.id)}
            >
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequests;

