import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAnswer, checkSolution, skipRiddle } from './riddleSlice';
import externalLinkIcon from '../../resources/images/external-link.png';

export function Riddle() {
  const answerState = useSelector((state) => state.riddle.answer);
  const hint = useSelector((state) => state.riddle.hint);
  const failCount = useSelector((state) => state.riddle.failCount);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateAnswer(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkSolution());
  };

  return (
    <>
      <p id='wrong'>
        {hint}
        {failCount === 6 && (
          <a href='https://tolkiengateway.net/wiki/Doors_of_Durin'>
            <img
              className='externalLinkIcon'
              src={externalLinkIcon}
              alt='Link'
            />
          </a>
        )}
      </p>
      <form
        id='riddleForm'
        className='answer'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <label>
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            value={answerState}
          />
        </label>
        <br />
        <input className='enter' type='submit' value='Enter' />
      </form>
      {failCount === 8 && (
        <div id='skipButton'>
          <p>Just kidding. Come on in!</p>
          <button onClick={() => dispatch(skipRiddle())}>Skip Riddle</button>
        </div>
      )}
    </>
  );
}
