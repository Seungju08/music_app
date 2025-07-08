import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavigationBar from "./components/BottomNavigationBar";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PlayListPage from "./pages/PlayListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/playlist" element={<PlayListPage />} />
        </Routes>
        <BottomNavigationBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
