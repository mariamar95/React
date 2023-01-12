import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting name="Mike" greeting="welcome to my stateful component"/>
    </div>
  );
}

export default App;
