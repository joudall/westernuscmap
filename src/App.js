import './index.css';
import './RoomList.css'
import './Popup.css';
import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Atrium } from './Atrium';
import { Level2 } from './Level2';
import { LowerLevel } from './LowerLevel';
import { Level3 } from './Level3';
import findRoom from './FindRoom';
import { ModelController } from './ModelController';
import RoomList from './RoomList'; // Add this import
import { FaSearch } from "react-icons/fa";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState({});
  const [roomData, setRoomData] = useState(null);
  const [lowerModelClicked, setLowerModelClicked] = useState(false);
  const [atriumModelClicked, setAtriumModelClicked] = useState(false);  
  const [level2ModelClicked, setLevel2ModelClicked] = useState(false);
  const [level3ModelClicked, setLevel3ModelClicked] = useState(false);
  const [pointerOverPopup, setPointerOverPopup] = useState(false);
  const lowerRef = useRef();
  const level3Ref = useRef();
  const level2Ref = useRef();
  const atriumRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRoomList, setShowRoomList] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);
  const formattedHours = roomData ? roomData.Hours.split('\n') : [];

  useEffect(() => {
    // Set the current level when the component mounts
    setCurrentLevel("Lower Level");
    console.log('Current level set to 1');

    // Cleanup function to reset the level when the component unmounts
    return () => {
      setCurrentLevel(null);
      console.log('Current level reset');
    };
  }, []);

  const toggleRoomList = () => {
    setShowRoomList(!showRoomList);
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
  };
  
  const handleButtonClick = (level) => {
    handleLevelChange(level);
    setShowDropdown(false);
  };

  const handleFloorClick = (event, floorName, roomName) => {
    event.stopPropagation();
    const result = findRoom(floorName, roomName);
    setRoomData(result);
    console.log(`Clicked on floor: ${floorName}, room: ${roomName}`);
    if (result) {
      setHoveredRoom(result);
      setPopupVisible(true);
    }
  };

  const handleRoomClick = (floorName, roomName) => {
    setCurrentLevel(floorName);
    const result = findRoom(floorName, roomName);
    setRoomData(result);
    console.log(`Clicked on floor: ${floorName}, room: ${roomName}`);
    if (result) {
      setHoveredRoom(result);
      setPopupVisible(true);
    }
    // Add a short delay to allow the level change to complete before simulating the click
    setTimeout(() => {
      const roomElement = document.getElementById(`room-${roomName}`);
      if (roomElement) {
        roomElement.click();
      }
    }, 100);
  };
  
  
  return (
    <div className="wrapper">
      <div className="controls-container">
      <div style={{ position: 'absolute', zIndex: 1 }}>

        <button className="level-button" onClick={() => setShowDropdown((prev) => !prev)}>
          {currentLevel}
          <span>&#x25BC;</span>
        </button>
      
        {showDropdown && (
          <div className="level-dropdown">
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Lower Level")}>
              Lower Level
            </button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Atrium")}>
              Level 1
            </button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 2")}>
              Level 2
            </button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 3")}>
              Level 3
            </button>

          </div> )}
        </div>
        </div>

        <div className="search-icon" onClick={toggleRoomList}>
          <FaSearch size={30} />
        </div>
        {showRoomList && (
        <div className="search-container">
          <RoomList handleRoomClick={handleRoomClick} />
        </div>
      )}

      <Canvas camera={{ fov: 20, position: [40, 25, 0]}}>
        <Suspense fallback={null}>
          <spotLight intensity={20} angle={0.1} position={[10, 10, 100]} castShadow />
          <Environment preset="city" />
          <Atrium 
            currentLevel={currentLevel}
            popupVisible={popupVisible}
            setPointerOverPopup={setPointerOverPopup}
            atriumRef={atriumRef}
            showPopup={() => setPopupVisible(true)}
            hidePopup={() => setPopupVisible(false)}
            setHoveredRoomData={setHoveredRoom}
            handleFloorClick={handleFloorClick}
            modelClicked={atriumModelClicked}
            setModelClicked={setAtriumModelClicked}
          />
          <Level2
            currentLevel={currentLevel}
            popupVisible={popupVisible}
            setPointerOverPopup={setPointerOverPopup}
            level2Ref={level2Ref}
            showPopup={() => setPopupVisible(true)}
            hidePopup={() => setPopupVisible(false)}
            setHoveredRoomData={setHoveredRoom}
            handleFloorClick={handleFloorClick}
            modelClicked={level2ModelClicked}
            setModelClicked={setLevel2ModelClicked}
          />
          <Level3
            currentLevel={currentLevel}
            popupVisible={popupVisible}
            setPointerOverPopup={setPointerOverPopup}
            level3Ref={level3Ref}
            showPopup={() => setPopupVisible(true)}
            hidePopup={() => setPopupVisible(false)}
            setHoveredRoomData={setHoveredRoom}
            handleFloorClick={handleFloorClick}
            modelClicked={level3ModelClicked}
            setModelClicked={setLevel3ModelClicked}
          />
          <LowerLevel
            isVisible={currentLevel === 'Lower Level'}
            popupVisible={popupVisible}
            setPointerOverPopup={setPointerOverPopup}
            lowerRef={lowerRef}
            showPopup={() => setPopupVisible(true)}
            hidePopup={() => setPopupVisible(false)}
            setHoveredRoomData={setHoveredRoom}
            handleFloorClick={handleFloorClick}
            modelClicked={lowerModelClicked}
            setModelClicked={setLowerModelClicked}
          />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

          <ModelController
            lowerRef={lowerRef}
            atriumRef={atriumRef}
            level3Ref={level3Ref}
            level2Ref={level2Ref}
            selectedLevel={currentLevel}
          />
        </Suspense>
      </Canvas>
      {popupVisible && roomData ? (
        <div className="popup"
          onPointerOver={() => setPointerOverPopup(true)}
          onPointerOut={() => setPointerOverPopup(false)}
          >
          <button className="close-button" onClick={() => setPopupVisible(false)}>X</button>
          <div>
          {roomData.Name.trim() !== "" ? (
              <>
          <p><b>Name: </b> {roomData.Name}</p>
            <br></br>
              </>
            ) : null}
            {roomData.Content.trim() !== "" ? (
              <>
          <p><b>Description: </b> {roomData.Content}</p>
            <br></br>
              </>
            ) : null}
            {roomData.Hours.trim() !== "" ? (
              <>
                <p><b>Hours:</b></p>
                <ul>
                  {formattedHours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                  <br></br>
                </ul>
              </>
            ) : null}
            {roomData.Website.trim() !== "" ? (
              <>
          <p><b>Website: </b> <a href={roomData.Website} target="_blank" rel="noopener noreferrer">
            {roomData.Website}
            </a></p>
            <br></br>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div>Room not found.</div>
      )}
    </div>
  );
}

export default App;