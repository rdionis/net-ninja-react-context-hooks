import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class MovieList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="movie-list" style={{ color: theme.text, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>My Fiona</li>
          <li style={{ background: theme.ui }}>Men, women and children</li>
          <li style={{ background: theme.ui }}>El Cantante</li>
        </ul>
      </div>
    );
  }
}
