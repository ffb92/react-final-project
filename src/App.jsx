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
import ImprintScreen from "./pages/ImprintScreen";
import DataPrivacyScreen from "./pages/DataPrivacyScreen";
import WeatherScreen from "./pages/WeatherScreen";

//? Wichtig!
//* Beschreibung in der navbar einfügen
//* Mobile schließt sich die Navbar nicht wenn man was anklickt
//* Breite des Background passt noch nicht zu 100% wird, bei 600~px rum weiss
//* Neue Website news kleiner machen
//* Bilder gehen über Footer hinaus


//? Dann auch abschließend
//* Symanthisch body, header usw.?
//* images auslagern
//* Colors anpassen von nextui
//! Code optimieren und prüfen

//? Wichtig am Ende zu prüfen und kommentieren!
//! Bilder alle identische Größe
//! Prüfen, ob wirklich alles responsive ist!
//! Kommentare nicht vergessen!
//* Lighthouse
//! Publish!!!

//? Sollte machbar noch sein
//! Die Nachrichten auf der Mainpage über map holen

//? Bei Zeit
//! Content beim rendern animiert "einlaufen" lassen
//! Back to top Button
//! DarkMode?

//! Probleme
//! Tables sind nicht responsive

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
          <Route path="/weather" element={<WeatherScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/imprint" element={<ImprintScreen />} />
          <Route path="data-privacy" element={<DataPrivacyScreen />} />
        </Routes>
      </NextUIProvider>
    </Layout>
  );
}

export default App;
