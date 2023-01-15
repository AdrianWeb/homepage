import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { projects } from '../../resources/projects';
import { ToggleBtn } from './ToggleBtn';

export function SideNav() {
  const showState = useSelector((state) => state.sideNav.show);
  const style = (state) => {
    switch (state) {
      case false: {
        const style = {
          width: '40px',
          overflowY: 'hidden',
          background: 'transparent'
        };
        return style;
      }

      case true: {
        const style = {
          width: '200px',
          overflowY: 'scroll'
        };
        return style;
      }

      default:
        return;
    }
  };

  return (
    <>
      <aside id='navbar' style={style(showState)}>
        <ToggleBtn />
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
