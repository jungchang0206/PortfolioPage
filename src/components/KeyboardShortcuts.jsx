import React, { useEffect, useState } from 'react';
import '../styles/main.css';

const KeyboardShortcuts = () => {

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  };


  useEffect(() => {

    const handleKeyDown = (event) => {

      // Don't trigger shortcuts while typing
      if (
        event.target.tagName === 'INPUT' ||
        event.target.tagName === 'TEXTAREA'
      ) {
        return;
      }


      if (event.key === '?') {
        setIsOpen((prev) => !prev);
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }


      const shortcuts = {
        '1': 'about',
        '2': 'skills',
        '3': 'experience',
        '4': 'projects',
        '5': 'now',
        '6': 'contact'
      };


      if (shortcuts[event.key]) {

        scrollTo(shortcuts[event.key]);

      }

    };


    window.addEventListener(
      'keydown',
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, []);


  return (
    <>

      <button
        className="shortcuts-button"
        onClick={() => setIsOpen(true)}
      >
        [ ? ] SHORTCUTS
      </button>


      {isOpen && (

        <div
          className="shortcuts-overlay"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="shortcuts-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="shortcuts-header">

              <span>
                KEYBOARD_SHORTCUTS
              </span>

              <button
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>

            </div>


            <div className="shortcut-row">
              <kbd>1</kbd>
              <span>About</span>
            </div>

            <div className="shortcut-row">
              <kbd>2</kbd>
              <span>Skills</span>
            </div>

            <div className="shortcut-row">
              <kbd>3</kbd>
              <span>Experience</span>
            </div>

            <div className="shortcut-row">
              <kbd>4</kbd>
              <span>Projects</span>
            </div>

            <div className="shortcut-row">
              <kbd>5</kbd>
              <span>Now</span>
            </div>

            <div className="shortcut-row">
              <kbd>6</kbd>
              <span>Contact</span>
            </div>

            <div className="shortcut-row">
              <kbd>?</kbd>
              <span>Toggle shortcuts</span>
            </div>

            <div className="shortcut-row">
              <kbd>ESC</kbd>
              <span>Close panels</span>
            </div>

          </div>

        </div>

      )}

    </>
  );

};

export default KeyboardShortcuts;