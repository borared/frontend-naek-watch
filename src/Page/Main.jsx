import React from 'react'
import HeroSection from '../components/main/HeroSection'
import GenreSelector from '../components/main/GenreSelector'
import MovieSliderTrend from '../components/main/MovieSliderTrend'
import MovieSliderTop from '../components/main/MovieSliderTop'
import MovieSliderUpcomming from '../components/main/MovieSliderUpcomming'
import MovieSlider from "../components/main/MovieSlider";
const Main = () => {
  return (
    <div>
      <HeroSection/>
      <GenreSelector/>
      <MovieSlider category="top" title="រឿងល្បីៗ" />
      <MovieSlider category="trending" title="កំពុងពេញនិយម" />
      <MovieSlider category="upcoming" title="ឆាប់ៗនេះ" />
    </div>
  )
}

export default Main
