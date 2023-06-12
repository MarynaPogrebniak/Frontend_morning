import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <h1>Главная</h1>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </header>
  );
};

export default Home;
