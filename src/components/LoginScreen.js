import { useNavigate } from 'react-router-dom';
import UNIONS from '../config/unions';

const UNION = UNIONS[0];

function LoginScreen() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile', { state: { union: UNION.id, unionLabel: UNION.label } });
  };

  return (
    <div className="screen">
      <div className="card">
        <img src="/tl237rrtlogo.png" alt="Teamsters Local 237 Logo" className="app-logo" />
        <h1 className="screen-title">Accident Report</h1>
        <form onSubmit={handleSubmit} noValidate>
          <button type="submit" className="btn-primary">
            Submit a Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
