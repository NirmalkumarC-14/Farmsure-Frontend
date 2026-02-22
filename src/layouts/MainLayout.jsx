import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <CustomNavbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default MainLayout;
