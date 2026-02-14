import React from 'react'
import HeroSection from '../components/main/HeroSection'
import GenreSelector from '../components/main/GenreSelector'
import MovieSlider from '../components/main/MovieSlider'
const Main = () => {
  return (
    <div>
      <HeroSection/>
      <GenreSelector/>
      <MovieSlider />
    </div>
  )
}

export default Main
