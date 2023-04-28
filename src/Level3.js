import {useGLTF} from '@react-three/drei'
import Room from './Room';

export function Level3({level3Ref,showPopup,handleFloorClick,onHover,onUnhover, hoveredRoom,currentLevel, props, selectedRoom}) {
    const { nodes, materials } = useGLTF('/UCCLevel3.gltf');

      return (
      <group ref={level3Ref} {...props} dispose={null }>
      <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-6.07, 0, -4.13]}>
        <mesh geometry={nodes.Floor.geometry} material={materials.Floor_material} position={[0, -0.01, 0]} />
      </mesh>
      <mesh geometry={nodes.usclogo.geometry} material={materials.usclogo} position={[0.21, 0.05, 1.2]} rotation={[0, Math.PI / 2, 0]} />
      <>
            <Room
            roomNumber="Room 377"
            position={[-5.51, 0, -3.64]}
            wallGeometry={nodes.Room_377.geometry}
            floorGeometry={nodes.Floor022.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 377"}/>


            <Room
            roomNumber="Room 373"
            position={[-4.17, 0, -3.64]}
            wallGeometry={nodes.Room_373.geometry}
            floorGeometry={nodes.Floor023.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 373"}/>

            <Room
            roomNumber="Room 371"
            position={[-3.31, 0, -4.03]}
            wallGeometry={nodes.Room_371.geometry}
            floorGeometry={nodes.Floor024.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 371"}/>

            <Room
            roomNumber="Room 369"
            position={[-3.31, 0, -3.29]}
            wallGeometry={nodes.Room_369.geometry}
            floorGeometry={nodes.Floor019.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}     
            floorPosition={[0, 0.02, 0]}  
            Hovered={selectedRoom === "Room 369"}/>

             <Room
            roomNumber="Room 365"
            position={[-3.31, 0.02, -2.47]}
            wallGeometry={nodes.Room_365.geometry}
            floorGeometry={nodes.Floor008.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 365"}/>

            <Room
            roomNumber="Room 370"
            position={[-4.13, 0, -3.29]}
            wallGeometry={nodes.Room_370.geometry}
            floorGeometry={nodes.Floor018.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 370"}/>

            <Room
            roomNumber="Room 307"
            position={[-0.62, 0, -2.17]} 
            rotation={[0, 0.86, 0]}
            wallGeometry={nodes.Room_307.geometry}
            floorGeometry={nodes.Floor020.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Room 307"}/>

            <Room
            roomNumber="Rooms 303, 304, 305"
            position={[-0.42, 0, -1.78]} 
            rotation={[0, 0.86, 0]}
            wallGeometry={nodes['Room_303,_304,_305'].geometry}
            floorGeometry={nodes.Floor021.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Rooms 303, 304, 305"}/>

            <Room
            roomNumber="Room 316"
            position={[-0.9, 0, -0.5]} 
            rotation={[0, Math.PI / 4, 0]}
            wallGeometry={nodes.Room_316.geometry}
            floorGeometry={nodes.Floor014.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 316"}/>

            <Room
            roomNumber="Rooms 312-313"
            position={[-0.18, 0, -1.14]} 
            rotation={[0, Math.PI / 4, 0]}
            wallGeometry={nodes['Room_312-313'].geometry}
            floorGeometry={nodes.Floor013.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Rooms 312-313"}/>

            <Room
            roomNumber="Rooms 308-311"
            position={[0.32, 0, -2.17]} 
            rotation={[0, Math.PI / 4, 0]}
            wallGeometry={nodes['Room_308-311'].geometry}
            floorGeometry={nodes.Floor012.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Rooms 388-311"}/>

            <Room
            roomNumber="Room 350"
            position={[-2.91, 0, 3.08]}
            wallGeometry={nodes.Room_350.geometry}
            floorGeometry={nodes.Floor002.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 350"}/>
            
            <Room
            roomNumber="PMA 351"
            position={[-3.52, 0, 3.09]}
            wallGeometry={nodes.Room_351.geometry}
            floorGeometry={nodes.Floor003.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "PMA 351"}/>

            <Room
            roomNumber="Room 351A"
            position={[-3.96, 0, 3.09]}
            wallGeometry={nodes.Room_351A.geometry}
            floorGeometry={nodes.Floor004.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Room 351A"}/>

             <Room
            roomNumber="Study Area #1"
            position={[-2.85, 0, 2.89]} 
            rotation={[Math.PI, 0, Math.PI]}
            wallGeometry={nodes['Study_Area_#1'].geometry}
            floorGeometry={nodes.Floor005.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Study Area #1"}/>

            <Room
            roomNumber="Study Area #2"
            position={[-3.23, 0, 0.21]} 
            rotation={[Math.PI, 0, Math.PI]}
            wallGeometry={nodes['Study_Area_#2'].geometry}
            floorGeometry={nodes.Floor007.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Study Area #2"}/>

            <Room
            roomNumber="Room 315"
            position={[-0.04, 0, -0.72]} 
            rotation={[0, Math.PI / 4, 0]}
            wallGeometry={nodes.Room_315.geometry}
            floorGeometry={nodes.Floor011.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Room 315"}/>

            <Room
            roomNumber="USC Main Office 340"
            position={[-0.65, 0, 0.46]}
            wallGeometry={nodes.USC_Main_Office_340.geometry}
            floorGeometry={nodes.Floor010.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "USC Main Office 340"}/>

            <Room
            roomNumber="Room 320"
            position={[-1.44, 0, 0.46]}
            wallGeometry={nodes.Room_320.geometry}
            floorGeometry={nodes.Floor016.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Room 320"}/>

            <Room
            roomNumber="Room 301"
            position={[-1.51, 0, -0.81]}
            wallGeometry={nodes.Room_301.geometry}
            floorGeometry={nodes.Floor009.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Room 301"}/>

            <Room
            roomNumber="Room 318"
            position={[-1.42, 0, 0.27]}
            wallGeometry={nodes.Room_318.geometry}
            floorGeometry={nodes.Floor015.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Room 318"}/>

            <Room
            roomNumber="Elevator"
            position={[-4.08, 0, 1.2]} 
            rotation={[Math.PI, 0, Math.PI]}
            wallGeometry={nodes.Elevator.geometry}
            floorGeometry={nodes.Floor006.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Elevator"}/>

            <Room
            roomNumber="Bathroom #1"
            position={[-3.68, 0, -1.83]} 
            rotation={[Math.PI, 0, Math.PI]}
            wallGeometry={nodes['Bathroom_#1'].geometry}
            floorGeometry={nodes.Floor017.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Bathroom #1"}/>

            <Room
            roomNumber="Bathroom #2"
            position={[-0.84, 0, 2.57]} 
            rotation={[Math.PI, 0, Math.PI]}
            wallGeometry={nodes['Bathroom_#2'].geometry}
            floorGeometry={nodes.Floor001.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]} 
            Hovered={selectedRoom === "Bathroom #2"}/>
            </>

      <mesh geometry={nodes.Stairs.geometry} material={materials.Dark} position={[-1.82, 0, 3.18]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-0.02, 0, -2.63]} rotation={[Math.PI, -0.78, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[-5.3, 0, 0.94]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-6.16, 0, -3.93]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[-2.31, 0, 2.8]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
    </group>
    )
}