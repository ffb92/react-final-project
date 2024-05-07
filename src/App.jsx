import "./styles/App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./components/Layout";
import HomeScreen from "./pages/HomeScreen";
import EventsScreen from "./pages/EventsScreen";
import TicketsScreen from "./pages/TicketsScreen";
import PicturesScreen from "./pages/PicturesScreen";
import ContactScreen from "./pages/ContactScreen";
import ManagementScreen from "./pages/ManagementScreen";
import HistoryScreen from "./pages/HistoryScreen";
import MemberScreen from "./pages/MemberScreen";
import DancingScreen from "./pages/DancingScreen";
import StatutesScreen from "./pages/StatutesScreen";

function App() {
  const navigate = useNavigate();

  return (
    <Layout>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* Dropdown Start */}
          <Route path="/management" element={<ManagementScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/member" element={<MemberScreen />} />
          <Route path="/dancing" element={<DancingScreen />} />
          <Route path="/statutes" element={<StatutesScreen />} />
          {/* Dropdown Ende */}
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/tickets" element={<TicketsScreen />} />
          <Route path="/pictures" element={<PicturesScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </NextUIProvider>
    </Layout>
  );
}

export default App;
