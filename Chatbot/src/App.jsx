import {useState} from 'react'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './App.css'

function App() {
        const [chatMessages, setChatMessages] = useState([
          {
            message: "Hello chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "Can you get me todays date",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is 27 september",
            sender: "robot",
            id: "id4",
          },
        ]);

        return (
          <div className="Big-cont">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              className="input-box"
            />
          </div>
        );
      }
export default App;