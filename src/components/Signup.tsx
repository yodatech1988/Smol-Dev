import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/auth';
import { User } from '../types/user';
import '../styles/Signup.ts';

const Signup: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;