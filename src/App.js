import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardConfig from "./component/DashboardConfig";
import DashboardLogin from "./component/DashboardLogin";
import Earnings from "./component/Earnings";
import FarmOverview from "./component/FarmOverview";
import FarmOverview1 from "./component/FarmOverview1";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <DashboardLogin />} />
          <Route path='/config' element={ <DashboardConfig />} />
          <Route path='/farmoverview' element={ <FarmOverview1 />} />
          <Route path='/earning' element={ <Earnings />} />
          <Route path='/farm' element={ <FarmOverview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
