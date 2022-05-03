import React from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    //when submit don't wnat to reload again (NOOB cmt T.T)
    event.preventDefault();
    //sending to parent usename info
    setUser(username);
  }

  return (
    <div>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
