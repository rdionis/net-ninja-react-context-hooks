import React from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MovieList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
