import logo from './logo.svg';
import ArrayMap from './components/ArrayMap';
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import ArrayForEach from './components/ArrayForEach';
import ArrayFind from './components/ArrayFind';
import './App.css';
import ArrayFindIndex from './components/ArrayFindIndex';
import ArraySome from './components/ArraySome';
import ArrayEvery from './components/ArrayEvery';
import ArraySort from './components/ArraySort';


const names = [
  "Alice",
  "Bob",
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
        <ArrayForEach nameList={names}/>  
        <ArrayFind numberList={numbers} nameList={names}/>
        <ArrayFindIndex nameList ={names}/>
        <ArraySome nameList={names}/>
        <ArrayEvery nameList={names}/>
        <ArraySort nameList={names} />
      </header>
    </div>
  );
}

export default App;
