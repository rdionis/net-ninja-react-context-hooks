import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  render() {
    return (
      //another way of accessing Context | this one allows you to use more than one context in the same component and also works in functional components
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.text }}>
              <h1>Movies to Watch</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
