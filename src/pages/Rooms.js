import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="Our rooms">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
    <RoomsContainer />
    </>
  );
};

export default Rooms;
