import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// Components
import HeroCarousel from '../components/HeroCarousel'
import Services from '../components/Services'
import StandingOut from '../components/StandingOut'
import Gear from '../components/Gear'
import StudioInfo from '../components/StudioInfo'
import Crew from '../components/Crew'
import ShowreelSlider from '../components/ShowreelSlider'
import AutoPlayCarousel from '../components/AutoPlayCarousel'
import Testimonial from '../components/Testimonial'

const Home: NextPage = () => {
  return (
    <>
      <HeroCarousel />
      <Services />
      <StandingOut />
      <StudioInfo />
      <Crew />
      <ShowreelSlider />
      <Gear />
      <Testimonial />
      <AutoPlayCarousel />

    </>
  )
}

export default Home
