import { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-bar">
      <p className="status-bar-field">Xiza & 7.css</p>
      <p className="status-bar-field">Slide 1</p>
      <p className="status-bar-field">CPU Usage: {cpuUsage}%</p>
    </div>
  );
};
