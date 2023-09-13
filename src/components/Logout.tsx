import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../services/auth';

const Logout: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    logout()
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        console.error('Logout Error:', error);
      });
  }, [history]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;