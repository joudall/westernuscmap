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
  const [currentLevel, setCurrentLevel] = useState(null);
  const formattedHours = roomData ? roomData.Hours.split('\n') : [];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [popupExpanded, setPopupExpanded] = useState(true);
  const [zoom, setZoom] = useState(20);

  const lowerRef = useRef();
  const level3Ref = useRef();
  const level2Ref = useRef();
  const atriumRef = useRef();
  const cameraControllerRef = useRef();

  useEffect(() => {
    setCurrentLevel("Lower Level");
    return () => {
      setCurrentLevel(null);
    };
  }, []);

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

  const closePopup = () => {
    setPopupVisible(false);
    setRoomData(null);
    setSelectedRoom("");
  };

  return (
    <div className="wrapper">
      <div style={{ 
        position: 'absolute', 
        zIndex: 100, 
        top: 20, 
        left: 20, 
        width: 350
      }}>
        <RoomList
          handleRoomClick={(floorName, roomName) => {
            handleRoomClick(floorName, roomName);
          }}
          closePopup={closePopup}
        />
      </div>

      <div className="controls-container" style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}>
        <button 
          className="level-button" 
          onClick={() => setShowDropdown((prev) => !prev)}
          style={{
            backgroundColor: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            minWidth: 120
          }}
        >
          {currentLevel} <span>{showDropdown ? '▲' : '▼'}</span>
        </button>
      
        {showDropdown && (
          <div className="level-dropdown" style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            borderRadius: 4,
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '100%',
            zIndex: 101
          }}>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Lower Level")} style={{ padding: '8px 16px', width: '100%', textAlign: 'left', border: 'none', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Lower Level</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Atrium")} style={{ padding: '8px 16px', width: '100%', textAlign: 'left', border: 'none', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Atrium</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 2")} style={{ padding: '8px 16px', width: '100%', textAlign: 'left', border: 'none', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Level 2</button>
            <button className="level-dropdown-item" onClick={() => handleButtonClick("Level 3")} style={{ padding: '8px 16px', width: '100%', textAlign: 'left', border: 'none', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Level 3</button>
        </div>
      )}
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: 20,
        right: 20, 
        zIndex: 1001
      }}>
        <button 
          onClick={() => {
            console.log("Zoom in clicked, current zoom:", zoom);
            const newZoom = Math.max(zoom - 5, 10);
            setZoom(newZoom);
            console.log("New zoom set to:", newZoom);
          }}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 1
          }}
        >+</button>
        <button 
          onClick={() => {
            console.log("Zoom out clicked, current zoom:", zoom);
            const newZoom = Math.min(zoom + 5, 50);
            setZoom(newZoom);
            console.log("New zoom set to:", newZoom);
          }}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '0 0 4px 4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >−</button>
      </div>

<Canvas 
  camera={{ fov: zoom, position: [40, 25, 0] }} 
  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#9285a3'}}
>
  <CameraController initialZoom={zoom} onZoomChange={setZoom} ref={cameraControllerRef}/>
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
        onPointerOut={() => setPointerOverPopup(false)}
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 16,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          width: 350,
          top: 80,
          left: 20
        }}
      >
        <div style={{ 
          position: 'absolute', 
          top: 15, 
          right: 15, 
          display: 'flex', 
          gap: 10 
        }}>
        <button
            style={{
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f1f1f1',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 16
            }}
          onClick={() => {
            setRoomData(null);
            setSelectedRoom("");
            setPopupVisible(false);
          }}
          >
            ×
          </button>
        </div>

        <div>
          <h2 style={{ 
            fontSize: 22, 
            fontWeight: 'bold', 
            marginBottom: 6,
            marginTop: 0
          }}>{roomData.Name}</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 'bold', 
              marginBottom: 8 
            }}>Hours</h3>
            <div style={{ display: '', justifyContent: 'space-between' }}>
              <span style={{ 
                fontSize: 14 
              }}>{roomData.Hours.trim() !== "" ? roomData.Hours.split('\n')[0] : 'Until UCC closes'}</span>
            </div>
          </div>

           <div style={{ marginBottom: 20 }}>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 'bold', 
              marginBottom: 8 
            }}>Description</h3>
          {roomData.Content.trim() !== "" && (
            <div style={{ marginBottom: 20 }}>
              <p style={{ 
                fontSize: 14, 
                lineHeight: 1.5,
                margin: 0
              }}>
                {roomData.Content}
              </p>
              {roomData.Content.length > 100 && (
                <button style={{ 
                  background: 'none',
                  border: 'none',
                  color: '#1a73e8',
                  padding: 0,
                  fontSize: 14,
                  cursor: 'pointer',
                  marginTop: 4
                }}>
                </button>
              )}
            </div>
          )}
          </div>
          <div style={{ 
            display: 'flex', 
            marginTop: 10,
            gap: 10
          }}>
            {roomData.Website.trim() !== "" && (
                    <a
                      href={roomData.Website}
                      target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#f1f1f1', 
                  border: 'none', 
                  borderRadius: 16, 
                  padding: '8px 16px', 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: 14,
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <span style={{ marginRight: 8 }}>🌐</span> 
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    ) : (
      popupVisible && (
        <div className="popup" style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 8,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          top: 100,
          left: 20
        }}>
          <button
            className="close-button"
            onClick={() => {
              setPopupVisible(false);
            }}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'none',
              border: 'none',
              fontSize: 16,
              cursor: 'pointer'
            }}
          >X</button>
          <div>Room not found.</div>
        </div>
      )
    )
  )
}

      <div className="logo" style={{ 
        position: 'absolute', 
        bottom: 20, 
        left: 20, 
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <img src={USCLogo} alt="USC Logo" width={80} height={80} style={{ pointerEvents: 'auto' }} />
      </div>
      </div>
  );
}

export default App;