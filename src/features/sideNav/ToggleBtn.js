import { useDispatch, useSelector } from 'react-redux';
import { updateShow } from './sideNavSlice';

export function ToggleBtn() {
  const showState = useSelector((state) => state.sideNav.show);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateShow());
  };

  return (
    <>
      <button className='closebtn' onClick={handleClick}>
        {showState ? 'X' : '>'}
      </button>
    </>
  );
}
