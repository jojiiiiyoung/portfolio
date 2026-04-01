import { Layout } from './components/Layout/Layout';
import { Sidebar } from './components/Sidebar/Sidebar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

const App = () => {
  return (
    <Layout
      sidebar={<Sidebar />}
      content={
        <>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      }
    />
  );
};

export default App;
