import React, { Component } from "react";
import Menu from "./Menu";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
import Extras from "./Extras";
import "../styles.css";

export default class Ipod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "menu",
      selectedMenuIndex: 0,
    };
  }

  // Menu items
  menuItems = ["Music", "Games", "Settings", "Extras"];

  // Handle center button click (enter menu)
  handleSelect = () => {
    const selectedScreen = this.menuItems[this.state.selectedMenuIndex].toLowerCase();
    this.setState({ currentScreen: selectedScreen });
  };

  // Go back to main menu
  handleMenuClick = () => {
    this.setState({ currentScreen: "menu" });
  };

  // Scroll through menu items
  handleScroll = (direction) => {
    this.setState((prevState) => {
      let newIndex =
        direction === "up"
          ? (prevState.selectedMenuIndex - 1 + this.menuItems.length) % this.menuItems.length
          : (prevState.selectedMenuIndex + 1) % this.menuItems.length;

      return { selectedMenuIndex: newIndex };
    });
  };

  // Render active screen
  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "music":
        return <Music />;
      case "games":
        return <Games />;
      case "settings":
        return <Settings />;
      case "extras":
        return <Extras />;
      default:
        return <Menu menuItems={this.menuItems} selectedIndex={this.state.selectedMenuIndex} />;
    }
  };

  render() {
    return (
      <div className="ipod">
        <div className="screen">{this.renderScreen()}</div>

        <div className="controls">
          <button className="menu-btn" onClick={this.handleMenuClick}>
            Menu
          </button>
          <div className="wheel">
            <button className="up-btn" onClick={() => this.handleScroll("up")}>▲</button>
            <button className="center-btn" onClick={this.handleSelect}>Select</button>
            <button className="down-btn" onClick={() => this.handleScroll("down")}>▼</button>
          </div>
        </div>
      </div>
    );
  }
}