import './App.scss';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Presentation from './pages/Presentation';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { useState } from 'react';
import Footer from './pages/footer';
import React from 'react';

function App() {
  const [View, setView] = useState<string | boolean>('');

  function selectCurrentView(currentView: boolean | string) {
    if (currentView !== false) {
      setView(currentView);
    }
  }

  return (
      <div className="app">
        <Menu View={View} />
        <Home isInView={selectCurrentView} />
        <Presentation isInView={selectCurrentView} />
        <Education isInView={selectCurrentView} />
        <Experiences isInView={selectCurrentView} />
        <Contact isInView={selectCurrentView} />
        <Footer />
      </div>
  );
}

export default App;
