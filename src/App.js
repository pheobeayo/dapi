import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Onboarding from "./pages/onboarding/Onboarding";
import Onboardingtwo from "./pages/onboarding/Onboardingtwo";
import Onboardingthree from "./pages/onboarding/Onboardingthree";
import ConnectWallet from "./pages/connect-wallet/ConnectWallet";








function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/on-boarding' element={<Onboarding />} />
        <Route path="/onboarding-two" element={<Onboardingtwo />} />
        <Route path="/onboarding-three" element={<Onboardingthree />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;