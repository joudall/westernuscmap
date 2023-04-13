import roomData from './roomData.json';

const findRoom = (floorName, roomName) => {
  const floorData = roomData[floorName];
  if (floorData) {
    const roomData = floorData[roomName];
    if (roomData) {
      return {
        ...roomData,
        Parent: floorName,
        Position: roomData.Position || null,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default findRoom;
