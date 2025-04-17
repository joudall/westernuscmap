import React, { useState, useEffect } from 'react';
import './RoomList.css';
import roomData from './roomData.json';
import { FaSearch, FaTimes } from 'react-icons/fa';

function RoomList({ handleRoomClick, closePopup }) {
  const [searchValue, setSearchValue] = useState('');
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    // Process all rooms from roomData
    const processedRooms = [];
    
    Object.keys(roomData).forEach(floorName => {
      Object.keys(roomData[floorName]).forEach(roomKey => {
        const room = roomData[floorName][roomKey];
        processedRooms.push({
          ...room,
          key: roomKey,
          Parent: floorName,
          icon: determineIcon(room.Name, room.Content || "")
        });
      });
    });
    
    setRooms(processedRooms);
    console.log(`Loaded ${processedRooms.length} rooms from roomData`);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log("RoomList search:", value); 
    
    if (value.trim()) {
      const searchTermLower = value.toLowerCase().trim();
      
      const filtered = rooms.filter(room => 
        room.Name.toLowerCase().includes(searchTermLower)
      );
      
      filtered.sort((a, b) => {
        const aNameLower = a.Name.toLowerCase();
        const bNameLower = b.Name.toLowerCase();
        
        // Exact match
        if (aNameLower === searchTermLower && bNameLower !== searchTermLower) return -1;
        if (bNameLower === searchTermLower && aNameLower !== searchTermLower) return 1;
        
        // Starts with
        if (aNameLower.startsWith(searchTermLower) && !bNameLower.startsWith(searchTermLower)) return -1;
        if (bNameLower.startsWith(searchTermLower) && !aNameLower.startsWith(searchTermLower)) return 1;
        
        // Alphabetical
        return a.Name.localeCompare(b.Name);
      });
      
      console.log(`Found ${filtered.length} results for "${value}"`);
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms([]);
    }
  };
  
  // Simple function to determine icon
  const determineIcon = (name, content) => {
    name = name.toLowerCase();
    content = content.toLowerCase();
    
    if (name.includes("bathroom") || name.includes("washroom")) return "🚻";
    if (name.includes("starbucks") || name.includes("hortons")) return "☕";
    if (name.includes("spoke") || name.includes("food") || name.includes("cafe")) return "🍽️";
    if (name.includes("book") || name.includes("store")) return "📚";
    if (name.includes("lounge")) return "🛋️";
    if (name.includes("room") || /\d+/.test(name)) return "🏫";
    return "📍";
  };
  
  // Handle clicking on a room
  const handleRoomSelection = (room) => {
    console.log(`Selected room: ${room.Name} on ${room.Parent}`);
    handleRoomClick(room.Parent, room.key);
    setSearchValue("");
    setFocused(false);
  };
  
  const handleSearchFocus = () => {
    setFocused(true);
    // Close any open popup when user searches
    if (closePopup) {
      closePopup();
    }
  };

  return (
    <div className="roomlist-wrapper">
      <div className="search-container" style={{ 
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 25,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        padding: '6px 15px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}>
        <FaSearch style={{ color: '#666', marginRight: 10 }} />
        
        <input
          type="text"
          placeholder="Search for a room..."
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          style={{
            border: 'none',
            outline: 'none',
            padding: '8px 0',
            width: '100%',
            fontSize: 16,
            backgroundColor: 'transparent'
          }}
        />
        
        {searchValue && (
          <button 
            type="button" 
            onClick={() => {
              setSearchValue("");
              // Also close popup when clearing search
              if (closePopup) {
                closePopup();
              }
            }} 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#666'
            }}
          >
            <FaTimes />
          </button>
        )}
      </div>
      
      {(focused || searchValue) && filteredRooms.length > 0 && (
        <div style={{ 
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 5,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          maxHeight: '70vh',
          overflowY: 'auto',
          zIndex: 101
        }}>
          <div className="roomlist">
            {filteredRooms.map((room, index) => (
              <div 
                key={index}
                onClick={() => handleRoomSelection(room)}
                style={{
                  padding: '12px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ 
                  fontSize: 20, 
                  marginRight: 15, 
                  width: 24,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {room.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 'medium' }}>{room.Name}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{room.Parent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomList;