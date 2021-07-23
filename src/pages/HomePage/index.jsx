import React, { useRef } from "react";
import CartCountBtn from "../../components/common/CartCountBtn";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Banner from "../../components/Home/Banner";
import "../HomePage/styles.css";
const HomePage = () => {
  const menuRef = useRef();
  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      {/* Banner */}
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* Menu */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* Footer */}
      <Footer />
      {/* Cart Count Button */}
      <CartCountBtn />
    </div>
  );
};

export default HomePage;
