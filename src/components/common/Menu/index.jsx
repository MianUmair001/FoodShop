import React, { forwardRef } from "react";
import "./styles.css";
import { menuItemsData } from "./data";
import MenuItem from "./MenuItem";
import "./styles.css";
const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </main>
));

export default Menu;
