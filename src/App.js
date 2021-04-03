import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './compo/ChatFeed'

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="6597dfc9-9cfd-4df4-8916-68fe7f0a4f87"
      userName="Miled"
      userSecret="chatapp123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App;
