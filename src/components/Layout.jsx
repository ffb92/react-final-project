import Footer from "./Footer";
import Header from "./Header";

//! Wenn children nicht benutzt wird, wird der Inhalt nicht angezeigt

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    // Wichtig, damit der Footer unten bleibt
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
