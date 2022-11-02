import MainPage from "./pages/MainPage";
import React from "react";
import {Route, Routes } from 'react-router-dom'
import MoviePage from "./pages/MoviePage";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/:id" element={<MoviePage />} />
    </Routes>
    </>
  );
}

export default App;
