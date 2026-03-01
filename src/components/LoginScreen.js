import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UNIONS from '../config/unions';

function LoginScreen() {
  const navigate = useNavigate();
  const [selectedUnionId, setSelectedUnionId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const union = UNIONS.find((u) => u.id === selectedUnionId);
    if (!union) {
      setError('Please select a union.');
      return;
    }
    if (password !== union.password) {
      setError('Incorrect password.');
      return;
    }
    navigate('/profile', { state: { union: union.id, unionLabel: union.label } });
  };

  return (
    <div className="screen">
      <div className="card">
        <p className="app-title">Pond Lehocky</p>
        <h1 className="screen-title">Accident Report</h1>
        <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
            <label htmlFor="union">Select Your Union</label>
            <select
              id="union"
              value={selectedUnionId}
              onChange={(e) => {
                setSelectedUnionId(e.target.value);
                setError('');
              }}
            >
              <option value="">— Select Union —</option>
              {UNIONS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>

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
