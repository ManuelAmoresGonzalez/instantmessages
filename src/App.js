import logo from './logo.svg';
import './App.css';
import ChatsComponent from './components/ChatsComponent';
import SpecificChat from './components/SpecificChat';

function App() {
  return (
    <div className="App bg-secondary">      
      <SpecificChat/>
      <ChatsComponent/>
    </div>
  );
}

export default App;
