import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling
import imageSrc from './crashimage.avif';

// Welcome Page
const WelcomePage = () => {
  return (
    <div className="centered">
      <h1>New York Collision Data Analysis<br />Welcome Page</h1>
      <nav>
        <Link to="/info">
          <button>Information Page</button>
        </Link>
        <Link to="/buttons">
          <button>Queries</button>
        </Link>
      </nav>
    </div>
  );
};

// Information Page
const InfoPage = () => {
  return (
    <div className="page">
      <div className="top-left">
      <nav>
        <Link to="/">
          <button>Back</button>
        </Link>
      </nav>
      </div>
      <h1>Information Page</h1>
      <p>Team Members: Erik Companhone Andrade de Almeida, Zackary Denson, Matthew Lee, Chris Ramroth, Jonathan Rodrigues</p>
      <p>Project Goal: To provide extensive, meaningful, and complex queries that can allow users to analyze crash information from New York City in order to draw important and helpful conclusions.</p>
    </div>
  );
};

// Buttons Page
const ButtonsPage = () => {
  return (
    <div className="page">
      <div className="top-left">
      <nav>
        <Link to="/">
          <button>Back</button>
        </Link>
      </nav>
      </div>
      <h1>Queries</h1>
      <nav>
        <Link to="/page1">
          <button className="button1">Query 1</button>
        </Link>
        <Link to="/page2">
          <button className="button2">Query 2</button>
        </Link>
        <Link to="/page3">
          <button className="button3">Query 3</button>
        </Link>
        <Link to="/page4">
          <button className="button4">Query 4</button>
        </Link>
        <Link to="/page5">
          <button className="button5">Query 5</button>
        </Link>
      </nav>
      <img src={imageSrc} alt="Description of the image" />
    </div>
  );
};

// Additional Pages
const Page1 = () => {
  return (
    <div className="page"><h1>Query 1</h1>
    <div className="top-left">
      <nav>
        <Link to="/buttons">
          <button>Back</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};
const Page2 = () => {
  return (
    <div className="page"><h1>Query 2</h1>
    <div className="top-left">
      <nav>
        <Link to="/buttons">
          <button>Back</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};
const Page3 = () => {
  return (
    <div className="page"><h1>Query 3</h1>
    <div className="top-left">
      <nav>
        <Link to="/buttons">
          <button>Back</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};
const Page4 = () => {
  return (
    <div className="page"><h1>Query 4</h1>
    <div className="top-left">
      <nav>
        <Link to="/buttons">
          <button>Back</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};
const Page5 = () => {
  return (
    <div className="page"><h1>Query 5</h1>
    <div className="top-left">
      <nav>
        <Link to="/buttons">
          <button>Back</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
};

export default App;
