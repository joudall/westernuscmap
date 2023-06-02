import './index.css';
import './RoomList.css'
import './Popup.css';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Atrium } from './Atrium';
import { Level2 } from './Level2';
import { LowerLevel } from './LowerLevel';
import { Level3 } from './Level3';
import findRoom from './FindRoom';
import { ModelController } from './ModelController';
import RoomList from './RoomList';
import CameraController from './CameraController';
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import USCLogo from './images/USClogo.png';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState({});
  const [roomData, setRoomData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [lowerModelClicked, setLowerModelClicked] = useState(false);
  const [atriumModelClicked, setAtriumModelClicked] = useState(false);  
  const [level2ModelClicked, setLevel2ModelClicked] = useState(false);
  const [level3ModelClicked, setLevel3ModelClicked] = useState(false);
  const [pointerOverPopup, setPointerOverPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRoomList, setShowRoomList] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);
  const formattedHours = roomData ? roomData.Hours.split('\n') : [];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [searchIconSelected, setSearchIconSelected] = useState(false);
  const [popupExpanded, setPopupExpanded] = useState(true);

  const lowerRef = useRef();
  const level3Ref = useRef();
  const level2Ref = useRef();
  const atriumRef = useRef();

  useEffect(() => {
    setCurrentLevel("Lower Level");
    return () => {
      setCurrentLevel(null);
    };
  }, []);

  const toggleRoomList = () => {
    setSearchIconSelected(!searchIconSelected);
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
    if (result) {
      setHoveredRoom(result);
      setPopupVisible(true);
      setSelectedRoom(roomName);
    }
  };

  const onHover = (event, room) => {
    event.stopPropagation();
    setHoveredRoom(room);
    setSelectedRoom(room);
  };

  const onUnhover = (event) => {
    setHovered(false);
    setHoveredRoom(null);
  };

  const handleRoomClick = (floorName, roomName) => {
    setCurrentLevel(floorName);
    const result = findRoom(floorName, roomName);
    setRoomData(result);
    if (result) {
      setPopupVisible(true);
      setSelectedRoom(roomName);
      setHovered(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemClick = (level) => {
    handleRoomClick(level);
    setSelectedRoom(null);
    setSidebarOpen(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const togglePopupExpanded = () => {
    setPopupExpanded(!popupExpanded);
  };

  return (
    <div className="wrapper">
      <div className="controls-container">
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <button className="level-button" onClick={() => setShowDropdown((prev) => !prev)}>{currentLevel}<span>&#x25BC;</span></button>
      
        {showDropdown && (
          <div className="level-dropdown">
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Lower Level")}>Lower Level</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Atrium")}>Atrium</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 2")}>Level 2</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 3")}>Level 3</button>
          </div> )}
        </div>
        </div>

        <div className="hamburger-menu" onClick={toggleSidebar}>&#9776;</div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeSidebar}>X</button>
        <ul>
          <li onClick={() => handleMenuItemClick('Lower Level')}>Lower Level</li>
          <li onClick={() => handleMenuItemClick('Atrium')}>Atrium</li>
          <li onClick={() => handleMenuItemClick('Level 2')}>Level 2</li>
          <li onClick={() => handleMenuItemClick('Level 3')}>Level 3</li>
        </ul>
      </div>

      <div style={{ position: 'absolute', zIndex: 1 }}>
      <button className="search-button" onClick={toggleRoomList}>
      {searchIconSelected ? (
        <FaTimes size={25} />
        ) : (
        <FaSearch size={25} />
      )}</button>

      {showRoomList && (
        <div>
          <RoomList
            handleRoomClick={(floorName, roomName) =>
              handleRoomClick(floorName, roomName)
            }
          />
        </div>
      )}
      </div>

<Canvas camera={{ fov: 20, position: [40, 25, 0] }} style={{position: 'absolute', top: 0, left: 0,width: '100%', height: '100%',}}>
  <CameraController/>
          <Suspense fallback={null}>
          <spotLight intensity={20} angle={0.1} position={[10, 10, 100]} castShadow/>
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
            onHover={onHover}
            onUnhover={onUnhover}
            selectedRoom={selectedRoom}
            hoveredRoom={hoveredRoom}
            Hovered={Hovered}/>

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
            onHover={onHover}
            onUnhover={onUnhover}
            selectedRoom={selectedRoom}
            hoveredRoom={hoveredRoom}
            Hovered={Hovered}/>

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
            onHover={onHover}
            onUnhover={onUnhover}
            selectedRoom={selectedRoom}
            hoveredRoom={hoveredRoom}
            Hovered={Hovered}/>

          <LowerLevel
            currentLevel={currentLevel}
            popupVisible={popupVisible}
            setPointerOverPopup={setPointerOverPopup}
            lowerRef={lowerRef}
            showPopup={() => setPopupVisible(true)}
            hidePopup={() => setPopupVisible(false)}
            setHoveredRoomData={setHoveredRoom}
            handleFloorClick={handleFloorClick}
            modelClicked={lowerModelClicked}
            setModelClicked={setLowerModelClicked}
            onHover={onHover}
            onUnhover={onUnhover}
            selectedRoom={selectedRoom}
            hoveredRoom={hoveredRoom}
            Hovered={Hovered}/>

          <OrbitControls/>
          <ModelController
            lowerRef={lowerRef}
            atriumRef={atriumRef}
            level3Ref={level3Ref}
            level2Ref={level2Ref}
            selectedLevel={currentLevel}/>
        </Suspense>
      </Canvas>

      {
  popupVisible && (
    roomData && roomData.Name.trim() !== "" ? (
      <div
      className={`popup ${popupExpanded ? "expanded" : ""}`}
        onPointerOver={() => setPointerOverPopup(true)}
        onPointerOut={() => setPointerOverPopup(false)}>
        <button
          className="close-button"
          onClick={() => {
            setRoomData(null);
            setSelectedRoom("");
            setPopupVisible(false);
          }}
        >X{" "}</button>
        <div>
          {roomData.Name.trim() !== "" ? (
            <>
              <p><b>Name: </b> {roomData.Name}</p>
            </>
          ) : null}
          <button
            className="toggle-details-btn"
            onClick={togglePopupExpanded}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
          {popupExpanded ? (
        <FaCaretDown className="black-icon" onClick={() => setPopupExpanded(!popupExpanded)} />
      ) : (
        <FaCaretUp className="black-icon" onClick={() => setPopupExpanded(!popupExpanded)} />
      )}
          </button>
          {popupExpanded &&(
            <>
              {roomData.Content.trim() !== "" ? (
                <>
                  <p><b>Description: </b> {roomData.Content} </p>
                </>
              ) : null}
              {roomData.Hours.trim() !== "" ? (
                <>
                  <p><b>Hours:</b></p>
                  <ul>
                    {formattedHours.map((hour, index) => (
                      <li key={index}>{hour}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {roomData.Website.trim() !== "" ? (
                <>
                  <p>
                    <b>Website: </b>{" "}
                    <a
                      href={roomData.Website}
                      target="_blank"
                      rel="noopener noreferrer">
                      {roomData.Website}
                    </a>
                  </p>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
    ) : (
      popupVisible && (
        <div className="popup">
          <button
            className="close-button"
            onClick={() => {
              setPopupVisible(false);
            }}
          >X</button>
          <div>Room not found.</div>
        </div>
      )
    )
  )};

      <div className="logo">
        <img src={USCLogo} alt="USC Logo" width={100} height={100} />
      </div>
      </div>
  );
}

export default App;