import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Companies from "./screens/Companies";
import { Provider } from "react-redux";
import { store } from "./store";
// import Login from "./screens/Login";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/laporkan" element={<Laporkan />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App