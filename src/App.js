import './App.scss';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Presentation from './pages/Presentation';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { useState } from 'react';
import Footer from './pages/footer';

function App() {
  const [View, setView] = useState('');

  function selectCurrentView(currentView) {
    if (currentView !== false) {
      setView(currentView);
    }
  }

  return (
    <>
      <div class="app">
        <Menu menuView={selectCurrentView} View={View} />
        <Home isInView={selectCurrentView} />
        <Presentation isInView={selectCurrentView} />
        <Education isInView={selectCurrentView} />
        <Experiences isInView={selectCurrentView} />
        <Contact isInView={selectCurrentView} />
        <Footer />
      </div>
    </>
  );
}

export default App;
