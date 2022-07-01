
import './App.css';
import 'tachyons'
import Inputshortner from './Components/inputshortner';
import Background from './background/background';
import Linkresult from './Components/Linkresult';

function App() {
  return (
    <div className="tc">
     <Inputshortner/>
     <Background/>
     <Linkresult/>
    </div>
  );
}

export default App;
