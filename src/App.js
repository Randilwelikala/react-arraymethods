import logo from './logo.svg';
import ArrayMap from './components/ArrayMap';
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import './App.css';

const names = [
  "Alice",
  "BOb",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack"
];

const numbers = [1,2,3,4,5,6,7,8,9,10];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ArrayMap nameList={names}/>  
        <ArrayFilter nameList={names}/>
        <ArrayReduce numberList={numbers}/>      
      </header>
    </div>
  );
}

export default App;
