import React from 'react';

const Stories = () => {
  const stories = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/yourstr.jpg`,
      profileImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/260307040_767908151274932_8586910889995926825_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ymXZR8ykcAAQ7kNvgHHAr9_&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A_QJ9xMV6mrjY2FdzElYeNb&oh=00_AYA9nwDjwZortQteUgaZrlxjZnNWVYiBPDCotTMw6laI6w&oe=66E8D83A',
      name: 'Your story',
      bgImage: `${process.env.PUBLIC_URL}/yourstr.jpg`
    },
    {
      id: 2,
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/448023946_1569498556961334_1634316692167844825_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=AhmN0oNx4kUQ7kNvgGWxtVz&_nc_ht=scontent.fhan3-1.fna&_nc_gid=ABGrozZ6v9zNsza4U8b1pr0&oh=00_AYC7JD7YCkoQXO8SZOY9iesagY5GkPrwBbJe3ntik1An7Q&oe=66E8FA58',
      profileImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/448023946_1569498556961334_1634316692167844825_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=AhmN0oNx4kUQ7kNvgGWxtVz&_nc_ht=scontent.fhan3-1.fna&_nc_gid=ABGrozZ6v9zNsza4U8b1pr0&oh=00_AYC7JD7YCkoQXO8SZOY9iesagY5GkPrwBbJe3ntik1An7Q&oe=66E8FA58',
      name: 'Hung Nguyen',
      bgImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/458107702_1029915121673573_3346796229637114296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3q99X2XmTWsQ7kNvgHC_2Bt&_nc_ht=scontent.fhan3-1.fna&oh=03_Q7cD1QHpeo7fKm6BAjApHkJu4Q4fWuVnUigS7DlQb61r26xAPQ&oe=670AA957'
    },
    {
      id: 3,
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/454974727_2532321783616523_4287145081538853078_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=F4YrNdSDkH8Q7kNvgFQG5uP&_nc_ht=scontent.fhan3-1.fna&_nc_gid=ANpLjNdck0VGewYaXWSjmqT&oh=00_AYCmSvgpV-5tIapZ7qxjGEJYHDMESmbR5M1TEfIyyNue9g&oe=66E8F1B1',
      profileImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/454974727_2532321783616523_4287145081538853078_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=F4YrNdSDkH8Q7kNvgFQG5uP&_nc_ht=scontent.fhan3-1.fna&_nc_gid=ANpLjNdck0VGewYaXWSjmqT&oh=00_AYCmSvgpV-5tIapZ7qxjGEJYHDMESmbR5M1TEfIyyNue9g&oe=66E8F1B1',
      name: 'Nguyen Thi Thuy Linh',
      bgImage: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/455828328_512271038019195_4234342645102472855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Mg-qkU9q2VMQ7kNvgFmcyH6&_nc_ht=scontent.fhan3-2.fna&oh=03_Q7cD1QF0DvETXDzcbCoRBQkl3FkK5DJPaONr3Y0R-RWdiDP0aw&oe=670A88A1'
    },
    {
      id: 4,
      image: 'anhnen.jpg',
      profileImage: 'anhnen.jpg',
      name: 'Lee Ang',
      bgImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/459197545_2502170079979148_7496199175874826290_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=vX3faiCkraUQ7kNvgGN4PFE&_nc_ht=scontent.fhan3-1.fna&oh=00_AYCgT9cIfcAgwpD7gInfZ57lxad2u-H9_xUrzoHFKOdxdQ&oe=66EB0F8C'
    },
    {
      id: 5,
      image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/458700211_2270547293285429_1294476030089865858_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=78RWX6xRVEAQ7kNvgGc1I7L&_nc_ht=scontent.fhan3-2.fna&oh=00_AYA5p78zz1tt0g9gQwxn0IujWnlc1QoF9fppXVwX5Z1Rtw&oe=66E8FB26',
      profileImage: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/458700211_2270547293285429_1294476030089865858_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=78RWX6xRVEAQ7kNvgGc1I7L&_nc_ht=scontent.fhan3-2.fna&oh=00_AYA5p78zz1tt0g9gQwxn0IujWnlc1QoF9fppXVwX5Z1Rtw&oe=66E8FB26',
      name: 'Nguyen Viet Anh',
      bgImage: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/458305069_863974862011720_8083016528128025961_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kg9rPTxNnF8Q7kNvgFPv9mR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AB3BAHKH_ilr5nw20hsg15-&oh=03_Q7cD1QF0jbYJcmg5FTdjeavsl4SDh_6h2a4VtOZsBi43sVg9HA&oe=670A7528'
    },
    {
      id: 6,
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AZHHt02AfAQjsRKS8VtHM4r&oh=00_AYCuqvmiR_bmF87DNRacTfTj4SF3GhccPqDH5tqNe_KHOQ&oe=670A717A',
      profileImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AZHHt02AfAQjsRKS8VtHM4r&oh=00_AYCuqvmiR_bmF87DNRacTfTj4SF3GhccPqDH5tqNe_KHOQ&oe=670A717A',
      name: 'Ngo Gia Bao',
      bgImage: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/440933168_122144944586158200_109650670788515871_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cVRIwSy4sW0Q7kNvgF-zxUz&_nc_ht=scontent.fhan3-5.fna&_nc_gid=AzrQMd6Z9O9HDkMvD4tkdno&oh=00_AYAmoxlpR6XDjjt2S9cAjW17a-canc8ie8B1q9ms8aE5LQ&oe=66E8EB24'
    }
  ];

  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div 
          key={story.id} 
          className="story"
          style={{ 
            backgroundImage: `url(${story.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="profile-photo">
            <img src={story.profileImage} alt={story.name} />
          </div>
          <p className="name">{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;

