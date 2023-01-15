import doors from '../resources/images/dod.png';
import { Riddle } from '../features/riddle/Riddle';
import { useSelector } from 'react-redux';
import { NavigateHome } from '../features/navigateHome/NavigateHome';

export function Welcome() {
  const solutionState = useSelector((state) => state.riddle.passed);

  return (
    <>
      <div className='welcome'>
        <h1 className='riddle'>
          Speak, <em>friend</em>, and enter
        </h1>
        <h2 className='elvish'>
          <i>
            Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant.
            Celebrimbor o Eregion teithant i thiw hin.
          </i>
        </h2>
        <img className='doors' src={doors} alt='The Doors of Durin' />
        {!solutionState ? <Riddle /> : <NavigateHome />}
      </div>
    </>
  );
}
