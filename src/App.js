import { Routes, Route } from "react-router-dom";
import Login from "./Components/LoginComponent/Login";
import SearchPage from "./Components/SearchPageComponent/SearchPage";
import ErrorPage from "./Components/ErrorPageComponent/ErrorPage";
import Dashboard from "./Components/DashboardComponent/Dasboard";

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Search" element={<SearchPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  );
}

export default App;
