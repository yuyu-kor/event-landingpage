import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event2" element={<EventPage />} />
    </Routes>
  );
}

export default App;
