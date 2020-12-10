import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// with render props

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms} = value
//         if(loading){
//             return <Loading />
//         }
//         return (
//           <div>
//             <RoomsFilter rooms={rooms} loading={loading}/>
//             <RoomsList rooms={sortedRooms} loading={loading}/>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
