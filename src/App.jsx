import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage2 from "./pages/EventPage2";
import EventPage3 from "./pages/EventPage3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EventPage2" element={<EventPage2 />} />
        <Route path="/EventPage3" element={<EventPage3 />} />
      </Routes>
    </>
  );
}

export default App;
