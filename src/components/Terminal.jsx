import React, { useState, useRef, useEffect } from 'react';
import '../styles/main.css';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'output',
      content: (
        <>
          Welcome to Jung's interactive terminal.
          <br />
          Type <span className="terminal-highlight">help</span> to see available commands.
        </>
      ),
    },
  ]);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop =
        terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const addOutput = (content) => {
    setHistory((prev) => [
      ...prev,
      { type: 'output', content },
    ]);
  };

  const handleCommand = (command) => {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    setHistory((prev) => [
      ...prev,
      {
        type: 'command',
        content: command,
      },
    ]);

    switch (cmd) {
      case 'help':
        addOutput(
          <div>
            <div className="terminal-command-title">
              AVAILABLE COMMANDS
            </div>

            <div className="command-list">
              <div>
                <span>about</span>
                <span>→ Navigate to about section</span>
              </div>

              <div>
                <span>skills</span>
                <span>→ View technical skills</span>
              </div>

              <div>
                <span>experience</span>
                <span>→ View work experience</span>
              </div>

              <div>
                <span>projects</span>
                <span>→ View projects</span>
              </div>

              <div>
                <span>contact</span>
                <span>→ Get in touch</span>
              </div>

              <div>
                <span>resume</span>
                <span>→ Open resume</span>
              </div>

              <div>
                <span>github</span>
                <span>→ Open GitHub</span>
              </div>

              <div>
                <span>linkedin</span>
                <span>→ Open LinkedIn</span>
              </div>

              <div>
                <span>clear</span>
                <span>→ Clear terminal</span>
              </div>

              <div>
                <span>sudo hire jung</span>
                <span>→ ???</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'about':
        scrollToSection('about');
        addOutput('Navigating to ./about...');
        break;

      case 'skills':
        scrollToSection('skills');
        addOutput('Loading ./skills...');
        break;

      case 'experience':
        scrollToSection('experience');
        addOutput('Loading ./experience...');
        break;

      case 'projects':
        scrollToSection('projects');
        addOutput('Executing ./projects...');
        break;

      case 'contact':
        scrollToSection('contact');
        addOutput('Opening ./contact...');
        break;

      case 'now':
        scrollToSection('now');
        addOutput('Loading current system status...');
        break;

      case 'github':
        addOutput('Opening GitHub...');
        window.open(
          'https://github.com/jungchang0206',
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'linkedin':
        addOutput('Opening LinkedIn...');
        window.open(
          'https://www.linkedin.com/in/jung-chang',
          '_blank',
          'noopener,noreferrer'
        );
        break;

      case 'resume':
        addOutput('Resume download command executed.');
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'sudo hire jung':
      case 'hire jung':
        addOutput(
          <div className="hire-output">
            <div>AUTHENTICATING...</div>
            <div>████████████████████ 100%</div>
            <br />
            <div className="terminal-success">
              ✓ ACCESS GRANTED
            </div>
            <div>
              Jung Chang has successfully joined your engineering team.
            </div>
            <br />
            <div>
              Initializing onboarding...
            </div>
          </div>
        );
        break;

      case 'whoami':
        addOutput(
          <>
            jung
            <br />
            Computer Science Student
            <br />
            Aspiring Software Engineer
            <br />
            Builder of AI agents, full-stack applications, and systems.
          </>
        );
        break;

      case 'hello':
      case 'hi':
        addOutput('Hello, human 👋');
        break;

      default:
        addOutput(
          <>
            command not found: <span className="terminal-error">{command}</span>
            <br />
            Type <span className="terminal-highlight">help</span> for available commands.
          </>
        );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCommand(input);
    setInput('');
  };

  if (!isOpen) {
    return (
      <button
        className="terminal-launcher"
        onClick={() => setIsOpen(true)}
        aria-label="Open interactive terminal"
      >
        <span className="launcher-dot"></span>
        <span>&gt;_ OPEN TERMINAL</span>
      </button>
    );
  }

  return (
    <div className="interactive-terminal">
      <div className="interactive-terminal-header">
        <div className="terminal-window-dots">
          <span className="window-dot red"></span>
          <span className="window-dot yellow"></span>
          <span className="window-dot green"></span>
        </div>

        <span className="terminal-window-title">
          jung@portfolio:~
        </span>

        <button
          className="terminal-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close terminal"
        >
          ×
        </button>
      </div>

      <div
        className="interactive-terminal-body"
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className={`terminal-line ${item.type}`}>
            {item.type === 'command' && (
              <span className="terminal-prompt">
                jung@portfolio:~$
              </span>
            )}

            <span>{item.content}</span>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-input-row">
          <span className="terminal-prompt">
            jung@portfolio:~$
          </span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;