import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './compo/ChatFeed'
import LoginForm from './compo/LoginForm'

const projectID = "6597dfc9-9cfd-4df4-8916-68fe7f0a4f87"

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
