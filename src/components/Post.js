import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-photo">
            <img src={post.userImage} alt={post.userName} />
          </div>
          <div className="ingo">
            <h3>{post.userName}</h3>
            <small>{post.time}</small>
          </div>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
      </div>
      <div className="photo">
        <img src={post.postImage} alt="Post" />
      </div>
      <div className="action-button">
        <div className="interaction-buttons">
          <span><i className="uil uil-heart"></i></span>
          <span><i className="uil uil-comment-dots"></i></span>
          <span><i className="uil uil-share-alt"></i></span>
        </div>
        <div className="bookmark">
          <span><i className="uil uil-bookmark-full"></i></span>
        </div>
      </div>

      <div className="liked-by">
        {post.likedByImages.map((img, idx) => (
          <span key={idx}>
            <img src={img} alt="Liked by" />
          </span>
        ))}
        <p>Liked by <b>{post.likedByName}</b> and <b>{post.likedByOthers}</b></p>
      </div>

      <div className="caption">
        <p>{post.caption}</p>
      </div>
      <div className="comments text-muted">View all {post.commentCount} comments</div>
    </div>
  );
};

export default Post;

