import Home from "./screens/Home";
import Companies from "./screens/Companies";
import Auth from "./screens/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import SessionManager from "./layouts/SessionManager";
import Notifications from "./screens/Notifications";
import Conversations from "./screens/Conversations";
import CompaniesWithFilter from "./screens/CompaniesWithFilter";
import NewCompany from "./screens/NewCompany";
import PrivateRoute from "./layouts/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionManager>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companies" element={<Companies />} />
              <Route
                path="/new-company"
                element={
                  <PrivateRoute>
                    <NewCompany />
                  </PrivateRoute>
                }
              />
              <Route
                path="/companies/search"
                element={<CompaniesWithFilter />}
              />
              <Route path="/auth" element={<Auth />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/notifications" element={<Notifications />} />
              {/* <Route path="/laporkan" element={<Laporkan />} /> */}
            </Routes>
          </BrowserRouter>
        </SessionManager>
      </PersistGate>
    </Provider>
  );
}

export default App;
