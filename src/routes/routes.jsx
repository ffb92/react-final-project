import HomeScreen from "../pages/HomeScreen";
import ContactScreen from "../pages/ContactScreen";
import AboutScreen from "../pages/AboutScreen";

const routes = [
  { path: "/", element: <HomeScreen />, id: 1 },
  { path: "/contact", element: <ContactScreen />, id: 2 },
  { path: "/about-us", element: <AboutScreen />, id: 3 },
];

export default routes;
