import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./pages/HomeScreen";
import EventsScreen from "./pages/EventsScreen";
import TicketsScreen from "./pages/TicketsScreen";
import PicturesScreen from "./pages/PicturesScreen";
import ContactScreen from "./pages/ContactScreen";
import AboutScreen from "./pages/AboutScreen";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutScreen />} />
        <Route path="/events" element={<EventsScreen />}></Route>
        <Route path="/tickets" element={<TicketsScreen />}></Route>
        <Route path="/pictures" element={<PicturesScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
