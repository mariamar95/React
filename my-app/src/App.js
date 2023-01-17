import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithCallbacks from './components/StatefulGreetingWithCallbacks';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithCallbacks name="Mike" greeting="welcome to my stateful component"/>
    </div>
  );
}

export default App;
