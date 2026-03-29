import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UNIONS from '../config/unions';

const UNION = UNIONS[0];

function LoginScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== UNION.password) {
      setError('Incorrect password.');
      return;
    }
    navigate('/profile', { state: { union: UNION.id, unionLabel: UNION.label } });
  };

  return (
    <div className="screen">
      <div className="card">
        <img src="/IBT logo color.jpg" alt="Teamsters Local 237 Logo" className="app-logo" />
        <h1 className="screen-title">Accident Report</h1>
        <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
