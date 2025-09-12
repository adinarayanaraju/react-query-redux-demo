import React, { useState } from 'react';
import './ChatSupport.css';

export default function ChatSupport() {
  const [messages, setMessages] = useState<{ text: string; from: 'user' | 'agent' }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, from: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Hello! How can I help?', from: 'agent' }]);
    }, 1000);
  };

  return (
    <div className="chat-support">
      <h3>Chat Support</h3>
      <div className="chat-window">
        {messages.map((m, idx) => (
          <div key={idx} className={`message ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <input
        placeholder="Type message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
