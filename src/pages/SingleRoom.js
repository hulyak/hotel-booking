import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

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

    // first image and the rest of the images
    const [mainImg, ...restImgs] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {restImgs.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                  {pets ? "Pets allowed" : "No pets allowed"} 
              </h6>
              <h6>
                  {breakfast && "free breakfast included"}
              </h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>
                })}
            </ul>
        </section>
      </>
    );
  }
}
