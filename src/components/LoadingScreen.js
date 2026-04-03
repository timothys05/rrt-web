import { useEffect, useState } from 'react';

function LoadingScreen({ onDone }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const doneTimer = setTimeout(() => onDone(), 1900);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div className={`rrt-loader${fading ? ' rrt-loader--fade' : ''}`}>
      <div className="rrt-loader-content">
        <img src="/tl237rrtlogo.png" alt="RRT" className="rrt-loader-logo" />
        <div className="rrt-loader-bar">
          <div className="rrt-loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
