import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./app/components/Layout";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Features from "./app/pages/Features";
import Login from "./app/pages/Login";
import CreateAccount from "./app/pages/CreateAccount";
import PayforeignDashboard from "./app/components/DashboardLayout";
import NotFound from "./app/pages/NotFound";

export default function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
          </Route>
          <Route path="/dashboard" element={<PayforeignDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<CreateAccount />} />

          <Route to="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
