import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NavigateHome() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('home');
    }, 1000);
  }, [navigate]);
  return (
    <>
      <br />
      <h2>Welcome, friend</h2>
    </>
  );
}
