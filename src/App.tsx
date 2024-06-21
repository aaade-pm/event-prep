import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

// using React.lazy to optimize routing of pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const VendorsPage = React.lazy(() => import("./pages/VendorsPage"));
const EventPage = React.lazy(() => import("./pages/EventPage"));

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
