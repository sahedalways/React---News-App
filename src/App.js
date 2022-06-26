import React from "react";
import Header from "./Components/Common/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Screens/HomeScreen/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import Culture from "./Components/Culture/Culture";
import SinglePage from "./Components/Screens/SinglePage/SinglePage";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/culture" exact element={<Culture />} />
          <Route path="/singlepage/:id" exact element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
