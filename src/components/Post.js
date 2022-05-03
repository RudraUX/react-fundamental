import React from 'react';
import { UserContext, PostContext } from '../App';

const Post = ({ image, content, user, id }) => {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: 'DELETE_POST', payload: { id } });
  }

  return (
    <>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
      {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
    </>
  );
};

export default Post;
