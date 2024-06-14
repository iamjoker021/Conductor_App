import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import ChooseCity from './Component/ChooseCity';
import ChooseBus from './Component/ChooseBus';
import ChooseRouteAndFare from './Component/ChooseRouteAndFare';
import PaymentPage from './Component/PayementPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/city" element={ <ChooseCity /> }></Route>
          <Route path="/city/:city_id/bus" element={ <ChooseBus /> }></Route>
          <Route path="/bus/:bus_id/route" element={ <ChooseRouteAndFare /> }></Route>
          <Route path="/bus/payment-page" element={ <PaymentPage /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
