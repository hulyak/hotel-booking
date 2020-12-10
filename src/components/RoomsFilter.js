import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    breakfast,
    pets,
  } = context;

  //  get unique types
  let types = getUnique(rooms, "type"); // check the array for types property
  // add all
  types = ["all", ...types];
  // map to JSX
  types = types.map((item,index) => {
    return (
      <option value={item} key={item.index}>
        {item}
      </option>
    );
  });

  //  controlled inputs
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
