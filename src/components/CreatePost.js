import React from 'react';
import { PostContext } from '../App';

const CreatePost = ({ user }) => {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    // const newPosts = [post, ...posts];
    // setPosts(newPosts);
    // handleAddPost(post);
    dispatch({ type: 'ADD_POST', payload: { post } });
    setContent('');
    imageInputRef.current.value = '';
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
