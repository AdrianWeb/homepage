import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { HidingNav } from '../features/sideNav/HidingNav';
import { SideNavFixed } from '../features/sideNav/SideNavFixed';
import { updateDisplayWidth } from '../features/sideNav/sideNavSlice';

export function Navigation() {
  const displayWidthState = useSelector((state) => state.sideNav.displayWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', () =>
      dispatch(updateDisplayWidth(window.innerWidth))
    );
    return () => {
      window.removeEventListener('resize', () =>
        dispatch(updateDisplayWidth(window.innerWidth))
      );
    };
  }, [dispatch]);
  return (
    <>
      {displayWidthState < 1280 ? <HidingNav /> : <SideNavFixed />}
      <Outlet />
    </>
  );
}
