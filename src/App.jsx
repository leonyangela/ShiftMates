import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/landing-page/landing-page.pages";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
