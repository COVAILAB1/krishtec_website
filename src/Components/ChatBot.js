import React, { useState } from "react";
import whatsappImage1 from '../Images/what.png'; // Adjust the path as necessary
import messImage1 from '../Images/mess-black.png'; // Adjust the path as necessary

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for chat window toggle

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=7825933039","blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggles the chat window
  };

  return (
    <div className={`floating-icons ${isOpen ? 'chat-open' : ''}`}>
      {/* Chatbot Window */}
      <div
        className={`chat-window transition-all duration-500 ease-in-out overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg ${
          isOpen ? 'open' : 'closed'
        }`}
      >
        {isOpen && (
          <iframe
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/cbef9606-2921-4933-9303-d2a76b7d7617"
            className="w-full h-full border-none"
            title="Chatbot"
          ></iframe>
        )}
      </div>

      {/* WhatsApp Icon */}
      <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
        <img src={whatsappImage1} alt="WhatsApp" className="icon-image" />
      </div>

      {/* Chatbot Icon */}
      {/* <div className="chatbot-icon">
        <button
          onClick={toggleChat}
          className={`chat-button rounded-full bg-white p-3 shadow-lg focus:outline-none flex items-center justify-center`}
        >
          {isOpen ? '❌' : <img src={messImage1} alt="ChatBot" className="icon-image" />}
        </button>
      </div> */}
    </div>
  );
}
