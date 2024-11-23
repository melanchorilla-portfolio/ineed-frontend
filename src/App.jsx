import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Companies from "./screens/Companies";
import Auth from "./screens/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/laporkan" element={<Laporkan />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App