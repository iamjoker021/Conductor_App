import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import ChooseCity from './Component/ChooseCity';
import ChooseBus from './Component/ChooseBus';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/city" element={ <ChooseCity /> }></Route>
          <Route path="/:city_id/bus" element={ <ChooseBus /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
