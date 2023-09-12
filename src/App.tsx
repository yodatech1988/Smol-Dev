import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './services/auth';
import './styles/global.ts';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/logout" component={Logout} />
          {/* Add more protected routes as needed */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;