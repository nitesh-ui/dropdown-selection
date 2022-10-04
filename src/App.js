import './App.css';
import Dropdown from './components/Dropdown';
import RxjsClass from './components/RxjsClass';
import RxjsFunction from './components/RxjsFunction';
import SelectValue from './components/SelectValue';

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <SelectValue/>
      <RxjsClass/>
      <RxjsFunction/>
    </div>
  );
}

export default App;
