import React from 'react'
import HeroSection from '../components/main/HeroSection'
import GenreSelector from '../components/main/GenreSelector'
import MovieSliderTrend from '../components/main/MovieSliderTrend'
import MovieSliderTop from '../components/main/MovieSliderTop'
import MovieSliderUpcomming from '../components/main/MovieSliderUpcomming'
const Main = () => {
  return (
    <div>
      <HeroSection/>
      <GenreSelector/>
      <MovieSliderTrend />
      <MovieSliderTop />
      <MovieSliderUpcomming />
    </div>
  )
}

export default Main