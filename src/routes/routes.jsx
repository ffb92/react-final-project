import HomeScreen from "../pages/HomeScreen";
import ManagementScreen from "../pages/ManagementScreen";
import EventsScreen from "../pages/EventsScreen";
import TicketsScreen from "../pages/TicketsScreen";
import PicturesScreen from "../pages/PicturesScreen";
import ContactScreen from "../pages/ContactScreen";
import HistoryScreen from "../pages/HistoryScreen";
import MemberScreen from "../pages/MemberScreen";
import DancingScreen from "../pages/DancingScreen";
import StatutesScreen from "../pages/StatutesScreen";
import ImprintScreen from "../pages/ImprintScreen";
import DataPrivacyScreen from "../pages/DataPrivacyScreen";
import WeatherScreen from "../pages/WeatherScreen";

const routes = [
  { path: "/", element: <HomeScreen />, id: 1 },
  { path: "/management", element: <ManagementScreen />, id: 2 },
  { path: "/history", element: <HistoryScreen />, id: 3 },
  { path: "/member", element: <MemberScreen />, id: 4 },
  { path: "/dancing", element: <DancingScreen />, id: 5 },
  { path: "/statutes", element: <StatutesScreen />, id: 6 },
  { path: "/events", element: <EventsScreen />, id: 7 },
  { path: "/tickets", element: <TicketsScreen />, id: 8 },
  { path: "/pictures", element: <PicturesScreen />, id: 9 },
  { path: "/contact", element: <ContactScreen />, id: 10 },
  { path: "/imprint", element: <ImprintScreen />, id: 11 },
  { path: "/data-privacy", element: <DataPrivacyScreen />, id: 12 },
  {path: "/weather", element: <WeatherScreen/>, id: 13}
];

export default routes;
