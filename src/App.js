import MainPage from "./pages/MainPage";
import React from "react";
import {Route, Routes } from 'react-router-dom'
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import ResultsPage from "./pages/ResultsPage";
import MoviesMenuList from "./pages/MoviesMenuList";
import SeriesMenuList from "./pages/SeriesMenuList";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/movies/:id" element={<MoviePage />} />
    <Route path="/series/:id" element={<SeriesPage/>}/>
    <Route path="/searchResults/" element={<ResultsPage/>}/>
    <Route path="/MoviesList/:id" element={<MoviesMenuList/>}/>
    <Route path="/SeriesList/:id" element={<SeriesMenuList/>}/>
    </Routes>
    </>
  );
}

export default App;
