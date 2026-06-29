import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Cyberpunk AI Agent Interceptor
const isAIBot = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  const aiBots = [
    'gptbot', 'chatgpt-user', 'chatgpt', 'claudebot', 'claude-web', 'anthropic', 
    'google-extended', 'perplexitybot', 'perplexity', 'cohere-ai', 'cohere', 
    'bytespider', 'ccbot', 'diffbot', 'omgilibot', 'omgili', 'imagesiftbot', 
    'imagesift', 'facebookbot', 'meta-externalagent', 'meta-externaldata',
    'cohere-training-data', 'ai-crawler'
  ];
  return aiBots.some(bot => ua.includes(bot));
};

const container = document.getElementById('root');

if (isAIBot()) {
  container.innerHTML = `
    <div style="background-color: #070708; color: #ff007f; font-family: 'Orbitron', 'Courier New', Courier, monospace; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">
      <h1 style="border: 2px solid #ff007f; padding: 15px 30px; box-shadow: 0 0 15px rgba(255, 0, 127, 0.4); text-transform: uppercase; font-size: 24px; letter-spacing: 4px;">[ Access Denied ]</h1>
      <p style="color: #00f3ff; margin-top: 20px; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">Secure Telemetry Core Lockout</p>
      <p style="color: #808a9d; font-size: 11px; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px;">AI scraper agent intercepted and content execution shielded.</p>
    </div>
  `;
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
