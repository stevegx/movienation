import MainPage from "./pages/MainPage";
import React from "react";
import {Route, Routes } from 'react-router-dom'
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/movies/:id" element={<MoviePage />} />
    <Route path="/series/:id" element={<SeriesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
