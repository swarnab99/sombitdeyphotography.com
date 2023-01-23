import Header from "../header/Header";
import Footer from "../footer/Footer";
import WhatsappButton from "../WhatsappButton";

const DefaultLayout = ({ children }) => {
  return (
    <main className="main-content">
      <Header />
      <div className="main">{children}</div>
      <Footer />
      <WhatsappButton
        number="+919830570102"
        text="Hi, Sombit Dey Photography"
      />
    </main>
  );
};

export default DefaultLayout;
