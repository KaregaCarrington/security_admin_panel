import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
