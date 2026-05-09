import {useEffect,useRef} from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
        const messageRef=useRef(null)

        useEffect(()=>{
          const containerElem=messageRef.current;
          if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
          }
        },[chatMessages]); 

        return (
          <div className="chat-message-area"
          ref={messageRef}
          >
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

      export default ChatMessages