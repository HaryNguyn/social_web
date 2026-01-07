import React, { useState } from 'react';
import Stories from './Stories';
import Post from './Post';

const Feed = () => {
  const [postText, setPostText] = useState('');

  const posts = [
    {
      id: 1,
      userName: 'Nguyễn Việt Anh',
      userImage: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/458700211_2270547293285429_1294476030089865858_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=78RWX6xRVEAQ7kNvgGc1I7L&_nc_ht=scontent.fhan3-2.fna&oh=00_AYA5p78zz1tt0g9gQwxn0IujWnlc1QoF9fppXVwX5Z1Rtw&oe=66E8FB26',
      time: '15 phút trước',
      postImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/457855627_8256136351167115_904303490594170729_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=OCN9l5TTih4Q7kNvgFcIra5&_nc_ht=scontent.fhan3-1.fna&oh=03_Q7cD1QGkUGEYXUGp9qeW8WVniEH1KdMZ2JHK7NLvHR9imr09qQ&oe=670A7891',
      likedByImages: ['anhnen.jpg', 'anhnen.jpg', 'anhnen.jpg'],
      likedByName: 'minh Dương',
      likedByOthers: '2,323 orthers',
      caption: <><b>Nguyen Viet Anh</b> dang cam thay tuyet voi ben nguoi ay <span className="harsh-tag">#love</span></>,
      commentCount: 277
    },
    {
      id: 2,
      userName: 'Gallery iPhone X.',
      userImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/459469441_377970555358994_5106847433642411284_n.jpg?stp=c20.0.769.769a_dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=big5J19jPVMQ7kNvgF6UVm1&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AooaQ9gVqyIZQ0D5E68CTL9&oh=00_AYCvypJUYuvAozhkpx2QCeC2M2zDYxiqhEkgO0Nt8U4KzQ&oe=66E8E1BF',
      time: '2024',
      postImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/459410754_122106739022513375_6150075449832133158_n.jpg?stp=dst-jpg_p370x247&_nc_cat=1&ccb=1-7&_nc_sid=15d38e&_nc_ohc=CP5lH1P65ZIQ7kNvgFeDlyA&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AFryvU5jezTl_OBIKi112Ij&oh=00_AYBNXyTBjaRgZ4gd-gufK6VrYZetbE6JmLzqEt0LURIMog&oe=66E902D1',
      likedByImages: [
        'https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/454400453_410905991970492_1493830562828406304_n.jpg?stp=cp6_dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=6Xk0SMX-Jy0Q7kNvgHTF0qf&_nc_ht=scontent.fhan3-5.fna&_nc_gid=AmmjE0D2Z1Hn22APdd-Df2K&oh=00_AYCmnayw2c-4tc5Ui3ozd8bFnccYw4qea-4Gwje8XzmyNw&oe=66E8F307',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/458227417_7761876250602072_6102388466343333340_n.jpg?stp=c194.408.909.909a_dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=KWNTjcnfBqsQ7kNvgEvX6Lj&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AzVuDoeE7WWh6A1PJqE8Pi8&oh=00_AYDf8xAVpetWKIx5hx_E8AYFmXk8UNkBRnUGvO4hS4r2kw&oe=66E8D374',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AZHHt02AfAQjsRKS8VtHM4r&oh=00_AYCuqvmiR_bmF87DNRacTfTj4SF3GhccPqDH5tqNe_KHOQ&oe=670A717A'
      ],
      likedByName: 'Nguyễn Minh Phúc',
      likedByOthers: '2 orthers',
      caption: 'Để kỷ niệm sinh nhật lần thứ 93 của @Gallery iPhone, nhóm Thư viện iPhone sẽ gửi 393 điện thoại iPhone trong Thư viện mới cho những ai chúc họ "Chúc mừng sinh nhật" trước ngày 15 tháng 9. (Áp dụng cho tất cả các quốc gia.) Chúc may mắn. 💛🎈',
      commentCount: 1
    },
    {
      id: 3,
      userName: '3 1 0 7',
      userImage: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/453151458_1067584021396598_9133403527961511655_n.jpg?stp=c180.0.600.600a_dst-jpg_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=BWbjTLR1JIQQ7kNvgExjIDb&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AZXeb09ikoZ9AeL5j8HWbtn&oh=00_AYD_kikESZFytl1nzYeywOCnUZBbBmCqfFx27gCI7uw43Q&oe=66E8E3DE',
      time: '15 phút trước',
      postImage: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/459111445_438888849198411_2331990303318669630_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=hFlAGGIgGA4Q7kNvgFNSsBy&_nc_ht=scontent.fhan19-1.fna&_nc_gid=ABQh20ErNpqQ70yHtf_bo2z&oh=00_AYDPKmS6mAUEyqvbhmKDRUsfCo71-p44kw61fLZqAITlHg&oe=66E8F358',
      likedByImages: [
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AFIoPcBowPEfm-xRGktLefi&oh=00_AYA6k1lMHZaFUIVGUDf9YYdVWy8Pa30b-Nkd77vIVIOuRw&oe=670A717A',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AFIoPcBowPEfm-xRGktLefi&oh=00_AYA6k1lMHZaFUIVGUDf9YYdVWy8Pa30b-Nkd77vIVIOuRw&oe=670A717A',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AFIoPcBowPEfm-xRGktLefi&oh=00_AYA6k1lMHZaFUIVGUDf9YYdVWy8Pa30b-Nkd77vIVIOuRw&oe=670A717A'
      ],
      likedByName: 'Eng Pham',
      likedByOthers: '2,323 orthers',
      caption: ' tr oi như này t bt sống s🥲🥲🥲',
      commentCount: 11
    },
    {
      id: 4,
      userName: 'Một chút nhạc cho một ngày',
      userImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/277102257_1086052085668521_5743177445285951101_n.jpg?stp=dst-jpg_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=Xalg5PuHhcgQ7kNvgF2EjZt&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AS5HJ0Pho-A8DNboiWdCwF_&oh=00_AYDV-5TWdQD4dB-HAqo27tyzkTv0_wTNsPmpncnoB-nK4Q&oe=66E8FD69',
      time: '2 giờ trước',
      postImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/459321429_1170219114586353_5659099518842759777_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cOKnwjE2xeYQ7kNvgHXJZJk&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AexL1oBuYNvd09M5DIZFXcV&oh=00_AYDTUBzmI5BwwywFPaC5Xe-WELKsbRY06ww7pvlGixb3KQ&oe=66E8EDE1',
      likedByImages: [
        'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/459002095_1036591071498278_5697689641658671723_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=LJxUuVH55-sQ7kNvgENijBn&_nc_ht=scontent.fhan3-2.fna&oh=00_AYDWLJQ3ieESQ6GOY0gqeqLgCuMGc_8m0Yv7rHdcsFC3GQ&oe=66E8F942',
        'https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/457809334_122169802646162838_4363319586754188791_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=u-kK9dyBdzYQ7kNvgFAvdVg&_nc_ht=scontent.fhan3-5.fna&_nc_gid=AGYterA84LJRLjLZqHUuyd6&oh=00_AYAHeLaE9ZbWctGrdufL1j6Ml-pK3RKUNImvhNCqS4EmRw&oe=66E8DDB3',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&oh=00_AYA_7Pw95w-NjvpK6jvY2x0RP7D9mCjOwGXNlkwwL7klCg&oe=670A717A'
      ],
      likedByName: 'Anh Nguyen',
      likedByOthers: '644 orthers',
      caption: ' Tôi và đống bài tập của tôi: ',
      commentCount: 101
    },
    {
      id: 5,
      userName: 'Yêu+',
      userImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/420886518_764848259028767_3452171152085360145_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VaNpzoD8BNQQ7kNvgGrc0Wt&_nc_ht=scontent.fhan3-1.fna&oh=00_AYDl9755wQWf6Zo-UEm3ABuSRnAPNTEyrJQmQ6JY0LntCQ&oe=66E8F94F',
      time: '23 tháng 1',
      postImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/458499945_899753522204906_3979864227342656771_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hBLUL5O8pvoQ7kNvgG97gZU&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AOs3nT0LVPovJmgMZU-8rUK&oh=00_AYAbDXFfY0RaZmGVh_2H61bbgLS40IX4VUtAMrpiDDVWIQ&oe=66E8DC62',
      likedByImages: [
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AMkvZyhHI_3jXmgVoqrIxRx&oh=00_AYA7hYuNBxYgnb7PT3DoeFlZv5PlqSBBq_i0t46pyfRb1A&oe=670A717A',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AMkvZyhHI_3jXmgVoqrIxRx&oh=00_AYA7hYuNBxYgnb7PT3DoeFlZv5PlqSBBq_i0t46pyfRb1A&oe=670A717A',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rNanvdXoqvgQ7kNvgGlqzLi&_nc_ht=scontent.fhan3-1.fna&_nc_gid=AMkvZyhHI_3jXmgVoqrIxRx&oh=00_AYA7hYuNBxYgnb7PT3DoeFlZv5PlqSBBq_i0t46pyfRb1A&oe=670A717A'
      ],
      likedByName: 'Phúc Huy',
      likedByOthers: '5,5k orthers',
      caption: 'Uớc mơ lớn lao',
      commentCount: 241
    },
    {
      id: 6,
      userName: 'Vui không chịu được',
      userImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/338019498_1332793070629545_1529925379673243346_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=WKU2BCfQ694Q7kNvgFg_TU3&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A5qwNY5rEwr1MSPL17bmdc7&oh=00_AYDVTYOTtFy390VSiEEsUH3bz3A9sE6ntl9CGqeFvW4uBQ&oe=66E8FACF',
      time: '1 ngày',
      postImage: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/459367394_891261156365263_5237700913791966431_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A1TUvN_XoXAQ7kNvgHlUA2u&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A5qwNY5rEwr1MSPL17bmdc7&oh=00_AYD36lSTlr5NA8t_VEuOqJbB2tQd-Fb_m86QKyTgAezxxw&oe=66E8F753',
      likedByImages: [
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/429969920_1115396283011274_8737404645931720036_n.jpg?stp=cp6_dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=m5S2PKt9MI8Q7kNvgGXB2SQ&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A65hww4p6kbEPwOmqoS4cEn&oh=00_AYAnejBg8_5Nlf9eF90Jrw6dp7a2nCgII84u_sTN-IF6-Q&oe=66E8D986',
        'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/456614065_7977554525685380_8363942827607220128_n.jpg?stp=dst-jpg_s100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=U3MZItNBkGQQ7kNvgE-TMV8&_nc_ht=scontent.fhan3-1.fna&_nc_gid=A3M63_8b7cNrWFMQe6YmMRk&oh=00_AYBtLfZfwY_7KMDF8Lnlxficr6dVoIOsWJVxc7PJgW0-YQ&oe=66E904AC',
        'https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/277792564_1138583067080109_2688464852016916087_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=BbV9DxVU2TkQ7kNvgFZbnGC&_nc_ht=scontent.fhan3-5.fna&_nc_gid=AvH97RMWpsv5zOPeUxfAk0y&oh=00_AYAM65k_RSrrP-anaAYmsha1C_KjoyD2teWlDX6iuFaIDg&oe=66E8F309'
      ],
      likedByName: 'Nhung Trang',
      likedByOthers: '62k orthers',
      caption: 'vui thôi đừng vui quá :)))',
      commentCount: '4,1k'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim()) {
      // Handle post submission here
      console.log('Posting:', postText);
      setPostText('');
    }
  };

  return (
    <div className="middle">
      <Stories />
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="profile-photo">
          <img src={`${process.env.PUBLIC_URL}/anhnen.jpg`} alt="Profile" />
        </div>
        <input 
          type="text" 
          placeholder="Ban dang nghi gi?,Harri" 
          id="create-post"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>

      <div className="feeds">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

