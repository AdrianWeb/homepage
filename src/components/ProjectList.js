import { Link } from 'react-router-dom';
import { projects } from '../resources/projects';
import externalLinkIcon from '../resources/images/external-link.png';
import chainLinkIcon from '../resources/images/chain-link.png';

export function ProjectList() {
  return (
    <>
      <h2 className='mainHeadings'>
        Here you can find a collection of projects I made so far on my
        Codecademy - Full Stack Developer course
      </h2>
      <main id='projectListMain'>
        {projects.map((project) => {
          const path = '/projects/' + project.id;
          return (
            <div key={project.id} className='listedProject'>
              <div className='listedProjectGrid'>
                <Link id={project.id} className='listedProjectTitle' to={path}>
                  <h3>{project.title}</h3>
                  <img src={chainLinkIcon} alt='' />
                </Link>

                <a
                  className='thumbnailImage'
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={project.thumbnail} alt='' />
                </a>
                <div className='listedProjectDescription'>
                  <h4>Original description</h4>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className='listedProjectLinks'>
                <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                  See it live
                  <img
                    className='externalLinkIcon'
                    src={externalLinkIcon}
                    alt=''
                  />
                </a>

                <a href={project.gitUrl} target='_blank' rel='noreferrer'>
                  Github page
                  <img
                    className='externalLinkIcon'
                    src={externalLinkIcon}
                    alt=''
                  />
                </a>

                <a href={project.ccUrl} target='_blank' rel='noreferrer'>
                  Codecademy page
                  <img
                    className='externalLinkIcon'
                    src={externalLinkIcon}
                    alt=''
                  />
                </a>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
