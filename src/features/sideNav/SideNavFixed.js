import { Link } from 'react-router-dom';
import { projects } from '../../resources/projects';

export function SideNavFixed() {
  return (
    <>
      <aside id='navbar'>
        <h3>Jump to:</h3>
        <ul>
          {projects.map((project) => {
            const path = '/projects/' + project.id;
            return (
              <li key={project.id}>
                <Link id={project.id} className='navLinks' to={path} replace>
                  {project.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
