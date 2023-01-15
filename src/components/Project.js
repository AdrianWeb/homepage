import { useParams } from 'react-router-dom';
import { projects } from '../resources/projects';
import externalLinkIcon from '../resources/images/external-link.png';

export function Project() {
  const { id } = useParams();
  const project = projects[id - 1];

  return (
    <>
      <main id='projectMain'>
        <h1>{projects[id - 1]['title']}</h1>
        <a
          className='sneakPeekImage'
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
        >
          <img src={project.thumbnail} alt='' />
        </a>
        <div className='projectDescription'>
          <h4>Original description</h4>
          <p>{project.description}</p>
        </div>

        <a
          className='plinka'
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
        >
          See it live
          <img className='externalLinkIcon' src={externalLinkIcon} alt='' />
        </a>

        <a
          className='plinkb'
          href={project.gitUrl}
          target='_blank'
          rel='noreferrer'
        >
          Github page
          <img className='externalLinkIcon' src={externalLinkIcon} alt='' />
        </a>

        <a
          className='plinkc'
          href={project.ccUrl}
          target='_blank'
          rel='noreferrer'
        >
          Codecademy page
          <img className='externalLinkIcon' src={externalLinkIcon} alt='' />
        </a>
      </main>
    </>
  );
}
