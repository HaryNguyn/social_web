# Social Web - React Application

Đây là phiên bản React.js của ứng dụng mạng xã hội GaPo, được chuyển đổi từ HTML/CSS/JavaScript thuần sang React.

## Tính năng

- ✨ Giao diện mạng xã hội hiện đại
- 📱 Responsive design
- 🎨 Customizable theme
- 📝 Post feed với stories
- 💬 Message system
- 👥 Friend requests
- 🔔 Notifications

## Yêu cầu

- Node.js (version 14 trở lên)
- npm hoặc yarn

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

## Chạy ứng dụng

Chạy ứng dụng ở chế độ development:
```bash
npm start
```

Ứng dụng sẽ mở tại [http://localhost:3000](http://localhost:3000)

## Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `build/`.

## Cấu trúc thư mục

```
social web/
├── public/
│   ├── index.html
│   ├── anhnen.jpg
│   └── yourstr.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── Feed.js
│   │   ├── Post.js
│   │   ├── Stories.js
│   │   ├── MessageList.js
│   │   ├── FriendRequests.js
│   │   ├── ThemeModal.js
│   │   └── NotificationPopup.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Công nghệ sử dụng

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- CSS3 với CSS Variables
- Unicons (Icon library)

## Ghi chú

- Tất cả hình ảnh được lưu trong thư mục `public/`
- CSS được import trong `src/index.css`
- Component được tổ chức theo cấu trúc modular

