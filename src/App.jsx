import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Companies from "./screens/Companies";
import Auth from "./screens/Auth";
import Notifications from "./screens/Notifications";
import Conversations from "./screens/Conversations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/conversations" element={<Conversations />} />
        {/* <Route path="/laporkan" element={<Laporkan />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App