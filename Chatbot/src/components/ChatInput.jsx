import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function getInput(evt) {
          setInputText(evt.target.value);
        }

        function sendMessage() {
          const newMessage = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newMessage);

          const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newMessage,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);

          setInputText("");
        }
        return (
          <div className="cont">
            <input
              placeholder="Send a message to chatbot"
              onChange={getInput}
              size="30"
              value={inputText}
              className="input"
            />
            <button onClick={sendMessage} className="send-btn">
              Send
            </button>
          </div>
        );
      }
    export default ChatInput