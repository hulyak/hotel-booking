import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div>
          <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $399">
            <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner>
          </Hero>
        </div>
    )
}

export default Home
