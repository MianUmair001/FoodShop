import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyCart from "../../components/Cart/EmptyCart";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import { PayPalButton } from "react-paypal-button-v2";
import {
  selectCartItems,
  selectCartItemsCount,
  selectedCartTotal,
} from "../../redux/cart/cart.selector";
import "./styles.css";
import PaymentBtn from "./PaymentBtn";
const CartPage = ({ cartCount, cartList, cartTotal }) => {
  const btnStyle = {
    width: "20px",
    float: "right",
    marginRight: "180px",
  };
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total ${cartTotal}</h3>
          <div style={btnStyle}>
            <PaymentBtn total={cartTotal} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectedCartTotal,
});

export default connect(mapStateToProps)(CartPage);
