import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2 className="log">GaPo</h2>
        <div className="seach-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Seach for ....." />
        </div>
        <div className="create">
          <label className="btn btn-primary" htmlFor="create-post">Create</label>
          <div className="profile-photo">
            <img 
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/260307040_767908151274932_8586910889995926825_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ymXZR8ykcAAQ7kNvgHHAr9_&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A_QJ9xMV6mrjY2FdzElYeNb&oh=00_AYA9nwDjwZortQteUgaZrlxjZnNWVYiBPDCotTMw6laI6w&oe=66E8D83A" 
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

