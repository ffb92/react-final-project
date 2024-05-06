import Footer from "./Footer";
import Header from "./Header";

//! Wenn children nicht benutzt wird, wird der Inhalt nicht angezeigt

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
