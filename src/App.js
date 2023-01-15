import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { Project } from './components/Project';
import { TitleBar } from './components/TitleBar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route element={<TitleBar />}>
          <Route path='home' element={<Home />} />
          <Route path='projects' element={<Navigation />}>
            <Route path=':id' element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
