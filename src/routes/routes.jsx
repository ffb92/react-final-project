import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import EventsScreen from "../pages/EventsScreen";
import TicketsScreen from "../pages/TicketsScreen";
import PicturesScreen from "../pages/PicturesScreen";

import ContactScreen from "../pages/ContactScreen";

const routes = [
  { path: "/", element: <HomeScreen />, id: 1 },
  { path: "/about-us", element: <AboutScreen />, id: 2 },
  { path: "/events", element: <EventsScreen />, id: 3 },
  { path: "/tickets", element: <TicketsScreen />, id: 4 },
  { path: "/pictures", element: <PicturesScreen />, id: 5 },
  { path: "/contact", element: <ContactScreen />, id: 6 },
];

export default routes;
