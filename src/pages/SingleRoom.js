import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      // comes from history
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    );
 
  }
}
