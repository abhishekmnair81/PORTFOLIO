import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global Bot & Automated Agent Interceptor
const isBot = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  const botKeywords = [
    'bot', 'spider', 'crawler', 'scraper', 'headless', 'puppeteer', 
    'selenium', 'playwright', 'lighthouse', 'inspect', 'curl', 'wget', 
    'http', 'fetch', 'python', 'node', 'java', 'go-http', 'urllib', 
    'php', 'ruby', 'axios', 'postman', 'rest-client', 'http-client', 
    'slackbot', 'discordbot', 'telegrambot', 'whatsapp'
  ];
  return botKeywords.some(keyword => ua.includes(keyword));
};

const container = document.getElementById('root');

if (isBot()) {
  container.innerHTML = `
    <div style="background-color: #070708; color: #ff007f; font-family: 'Orbitron', 'Courier New', Courier, monospace; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">
      <h1 style="border: 2px solid #ff007f; padding: 15px 30px; box-shadow: 0 0 15px rgba(255, 0, 127, 0.4); text-transform: uppercase; font-size: 24px; letter-spacing: 4px;">[ Access Denied ]</h1>
      <p style="color: #00f3ff; margin-top: 20px; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">Secure Telemetry Core Lockout</p>
      <p style="color: #808a9d; font-size: 11px; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px;">Automated system or crawler agent intercepted and content execution shielded.</p>
    </div>
  `;
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
