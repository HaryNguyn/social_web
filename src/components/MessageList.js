import React, { useState } from 'react';

const MessageList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('primary');

  const messages = [
    {
      id: 1,
      name: 'Nguyen Viet Anh',
      image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/458700211_2270547293285429_1294476030089865858_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=78RWX6xRVEAQ7kNvgGc1I7L&_nc_ht=scontent.fhan3-2.fna&oh=00_AYA5p78zz1tt0g9gQwxn0IujWnlc1QoF9fppXVwX5Z1Rtw&oe=66E8FB26',
      text: 'hay e'
    },
    {
      id: 2,
      name: 'Hung Nguyen',
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/448023946_1569498556961334_1634316692167844825_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=AhmN0oNx4kUQ7kNvgGWxtVz&_nc_ht=scontent.fhan3-1.fna&_nc_gid=ABGrozZ6v9zNsza4U8b1pr0&oh=00_AYC7JD7YCkoQXO8SZOY9iesagY5GkPrwBbJe3ntik1An7Q&oe=66E8FA58',
      text: 'o dau day'
    },
    {
      id: 3,
      name: 'Ngo Gia Bao',
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AZHHt02AfAQjsRKS8VtHM4r&oh=00_AYCuqvmiR_bmF87DNRacTfTj4SF3GhccPqDH5tqNe_KHOQ&oe=670A717A',
      text: 'chan qua e anh di linh roi'
    },
    {
      id: 4,
      name: 'Lee Ang',
      image: `${process.env.PUBLIC_URL}/anhnen.jpg`,
      text: 'alo'
    }
  ];

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="messages">
      <div className="heading">
        <h4>Messages</h4>
        <i className="uil uil-edit"></i>
      </div>
      {/* Search bar */}
      <div className="seach-bar">
        <i className="uil uil-search"></i>
        <input 
          type="search" 
          placeholder="Search messages" 
          id="message-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* message category */}
      <div className="category">
        <h6 
          className={activeCategory === 'primary' ? 'active' : ''}
          onClick={() => setActiveCategory('primary')}
        >
          Primary
        </h6>
        <h6 
          className={activeCategory === 'general' ? 'active' : ''}
          onClick={() => setActiveCategory('general')}
        >
          General
        </h6>
        <h6 
          className={`message-requests ${activeCategory === 'requests' ? 'active' : ''}`}
          onClick={() => setActiveCategory('requests')}
        >
          Requests(7)
        </h6>
      </div>
      {/* message */}
      {filteredMessages.map((message) => (
        <div key={message.id} className="message">
          <div className="profile-photo">
            <img src={message.image} alt={message.name} />
          </div>
          <div className="message-body">
            <h5>{message.name}</h5>
            <p className="text-muted">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

