import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import DashboardLoginScreen from "./components/screens/DashboardLoginScreen";
import DashboardConfigScreen from "./components/screens/DashboardConfigScreen";
import EarningsScreen from "./components/screens/EarningsScreen";
import FarmOverView1Screen from "./components/screens/FarmOverView1Screen";
import FarmOverViewScreen from "./components/screens/FarmOverViewScreen";
import { WalletContextProvider } from "./components/context/walletContext";

function App() {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLoginScreen />} />
          <Route path="/config" element={<DashboardConfigScreen />} />
          <Route path="/farm" element={<FarmOverView1Screen />} />
          <Route path="/earning" element={<EarningsScreen />} />
          <Route path="/setting" element={<FarmOverViewScreen />} />
        </Routes>
      </BrowserRouter>
    </WalletContextProvider>
  );
}

export default App;
