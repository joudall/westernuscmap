import React, { useState, useEffect } from 'react';
import './RoomList.css';
import roomData from './roomData';

function RoomList({ handleRoomClick }) {
  const [searchValue, setSearchValue] = useState('');
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    const roomsArray = Object.entries(roomData).flatMap(([parent, children]) =>
      Object.values(children).map((room) => ({ ...room, Parent: parent }))
    );
    setRooms(roomsArray);
    setFilteredRooms(roomsArray);
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = rooms.filter((room) =>
      room.Name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  return (
    <div className="roomlist-container">
      <input
        type="text"
        placeholder="Search for a room..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchValue && (
        <ul className="roomlist">
          {filteredRooms.map((room, index) => (
            <li key={index} onClick={() => handleRoomClick(room.Parent, room.Name)}>
              {room.Parent} - {room.Name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RoomList;