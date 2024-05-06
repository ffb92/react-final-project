import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Layout from "./components/Layout";
import ContactScreen from "./pages/ContactScreen";
import AboutScreen from "./pages/AboutScreen";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about-us" element={<AboutScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
