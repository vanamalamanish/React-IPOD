import React from "react";

const Menu = ({ menuItems, selectedIndex }) => {
  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index} className={index === selectedIndex ? "selected" : ""}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
