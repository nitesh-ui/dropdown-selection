import './App.css';
import Dropdown from './components/Dropdown';
import RxjsClass from './components/RxjsClass';
import RxjsFunction from './components/RxjsFunction';
import SelectValue from './components/SelectValue';
import MultiSelectDropdown from './components/MultiSelectDropdown';

const options = ["Nitesh", "Pappu", "Chaubey", "Amber", "Shubham", "Akshay", "Kritika"];

function App() {
  
  const [multiOption, setMultiOption] = useState(["Akshay", "Kritika"]);
  
  return (
    <div className="App">
      <Dropdown/>
      <SelectValue/>
      <RxjsClass/>
      <RxjsFunction/>
      <MultiSelectDropdown defaultValue={options} setMultiOption={setMultiOption} optionList={options}/>
    </div>
  );
}

export default App;
