import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import CSS from "./pages/CSS";
import HTML from "./pages/HTML";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/CSS"} className={({ isActive }) => (isActive ? 'active' : '')} Component={CSS} />
        <Route path={"/HTML"} className={({ isActive }) => (isActive ? 'active' : '')} Component={HTML} />
      </Routes>
    </div>
  );
}

export default App;
