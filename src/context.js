import React, { useState, useEffect } from "react";
import items from "./data"; 
const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.url);
      let room = {...item.fields, images, id};
      return room;
    });
    return tempItems;
  };

  // get data, when component mounts change the state
  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.feature === true);
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms)
    setLoading(false);
    console.log(rooms);
  }, []);

  return (
    <RoomContext.Provider value={{...rooms, ...sortedRooms, ...featuredRooms, ...loading}}>{children}</RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
