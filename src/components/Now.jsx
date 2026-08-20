import React from 'react';
import '../styles/main.css';
import { NowIcon } from './Icons';

const Now = () => {
  return (
    <section id="now" className="section reveal">
      <div className="panel-tag">
        <NowIcon className="panel-icon" />
        <span className="panel-label">system_status</span>
        <span className="panel-pulse"></span>
      </div>

      <h2 className="section-title">$ status</h2>

      <div className="system-status">

        <div className="system-status-header">
          <span>SYSTEM.STATUS</span>

          <span className="status-online">
            <span className="status-dot"></span>
            ONLINE
          </span>
        </div>

        <div className="status-row">
          <span className="status-key">AVAILABLE_FOR_HIRE</span>
          <span className="status-value success">YES</span>
        </div>

        <div className="status-row">
          <span className="status-key">CURRENT_FOCUS</span>
          <span className="status-value">AI_AGENT_SYSTEMS</span>
        </div>

        <div className="status-row">
          <span className="status-key">LEARNING</span>
          <span className="status-value">SYSTEM_DESIGN + NETWORKING</span>
        </div>

        <div className="status-row">
          <span className="status-key">LOCATION</span>
          <span className="status-value">FAIRFAX_VA</span>
        </div>

        <div className="status-row">
          <span className="status-key">OPEN_TO</span>
          <span className="status-value">
            FULL_TIME + COLLABORATION
          </span>
        </div>

      </div>


      {/* CURRENT BUILD */}

      <div className="current-build">

        <div className="current-build-header">
          <span>CURRENT_BUILD</span>
          <span className="build-pulse">● ACTIVE</span>
        </div>

        <h3>AI Agent Systems</h3>

        <p>
          Exploring agent orchestration, LangGraph workflows,
          MCP integrations, and multi-agent communication.
        </p>


        <div className="agent-diagram">

          <div className="agent-node">
            USER
          </div>

          <div className="agent-arrow">↓</div>

          <div className="agent-node agent-core">
            AI AGENT
          </div>

          <div className="agent-arrow">↓</div>

          <div className="agent-tools">

            <div className="agent-node small">
              LANGGRAPH
            </div>

            <div className="agent-node small">
              MCP
            </div>

            <div className="agent-node small">
              TOOLS
            </div>

          </div>

          <div className="agent-arrow">↓</div>

          <div className="agent-node output">
            RESPONSE
          </div>

        </div>

      </div>

    </section>
  );
};

export default Now;