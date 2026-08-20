import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LetterGlitch from './components/LetterGlitch';
import Terminal from './components/Terminal';
import Now from './components/Now';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background Component */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <LetterGlitch
          glitchColors={['#1a2530', '#3fd8e8', '#2b4a55']}
          glitchSpeed={50}
          smooth={true}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Terminal />
      </div>
    </div>
  );
}

export default App;