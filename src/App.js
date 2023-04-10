import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage";
import RecomendedVideos from "./components/RecomendedVideos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div>
                <Header />
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
                <div className="app__page"></div>
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <div className="app__page">
                  <Sidebar />
                  <RecomendedVideos />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
