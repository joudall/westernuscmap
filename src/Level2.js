import {useGLTF} from '@react-three/drei'
import Room from './Room';

export function Level2({level2Ref,showPopup,handleFloorClick,onHover,onUnhover, hoveredRoom,currentLevel, props, selectedRoom}) {
    const { nodes, materials } = useGLTF('/UCCLevel2.gltf');

      return (
      <group ref={level2Ref} {...props} dispose={null}>

      <mesh geometry={nodes.thewave.geometry} material={materials.thewave} position={[0.6, 0.04, 2.16]} rotation={[0, -Math.PI / 2, 0]} scale={[0.7, 1, 0.7]} />
      <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-2.16, -0.01, -3.95]}>
        <mesh geometry={nodes.Floor019.geometry} material={materials.Floor_material} position={[0,-0.01,0]}/>
      </mesh>

            <>
            <Room
            roomNumber="Room 251"
            position={[-1.74, 0, -3.15]}
            wallGeometry={nodes.Room_251.geometry}
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
            Hovered={selectedRoom === "Room 251"}/>

            <Room
            roomNumber="Digital USC Services 265"
            position={[-0.36, 0, -2.00]}
            wallGeometry={nodes.Digital_USC_Room.geometry}
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
            Hovered={selectedRoom === "Digital USC Services 265"}/>

            <Room
            roomNumber="Gazette 263"
            position={[-0.09, 0, -2.88]}
            wallGeometry={nodes.Gazette.geometry}
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
            Hovered={selectedRoom === "Gazette 263"}/>

            <Room
            roomNumber="Mustang Lounge & Fireplace Lounge"
            position={[0.17, 0, -1.91]}
            wallGeometry={nodes['Mustang_Lounge_&_Fireplace_Lounge'].geometry}
            floorGeometry={nodes.Floor012.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0,0.01,0]}
            Hovered={selectedRoom === "Mustang Lounge & Fireplace Lounge"}/>

            <Room
            roomNumber="Room 270 #1"
            position={[0.350, 0, -1.26]}
            wallGeometry={nodes['Room_270_#1'].geometry}
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
            Hovered={selectedRoom === "Room 270 #1"}/>

            <Room
            roomNumber="Elevator"
            position={[0.37, 0, -0.52]}
            wallGeometry={nodes.Elevator.geometry}
            floorGeometry={nodes.Floor010.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Elevator"}/>

            <Room
            roomNumber="Off-Campus Resource Centre 270"
            position={[1.14, 0, -1.03]}
            wallGeometry={nodes.Room_270.geometry}
            floorGeometry={nodes.Floor014.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Off-Campus Resource Centre 270"}/>

            <Room
            roomNumber="Room 249"
            position={[-2.15, 0, -1.85]}
            wallGeometry={nodes.Room_249.geometry}
            floorGeometry={nodes.Floor009.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 249"}/>

            <Room
            roomNumber="Graphic Services"
            position={[-0.90, 0, -1.87]}
            wallGeometry={nodes.Graphic_Services.geometry}
            floorGeometry={nodes.Floor018.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Graphic Services"}/>

            <Room
            roomNumber="CHRW 250"
            position={[-1.62, 0, -1.87]}
            wallGeometry={nodes.CHRW.geometry}
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
            Hovered={selectedRoom === "CHRW 250"}/>

            <Room 
            roomNumber="Rooms 271 to 279" 
            position={[1.56, 0, 1.47]} 
            wallGeometry={nodes['271_to_279'].geometry} 
            floorGeometry={nodes.Floor013.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel} 
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Rooms 271 to 279"}/>

            <Room 
            roomNumber="McKeller Room 290" 
            position={[0.12, 0, 0.71]}
            wallGeometry={nodes.McKeller_Room.geometry} 
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
            Hovered={selectedRoom === "McKeller Room 290"}/>

            <Room 
            roomNumber="The Wave" 
            position={[0.34, 0, 3.12]}
            wallGeometry={nodes.The_Wave.geometry} 
            floorGeometry={nodes.Floor.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel} 
            floorPosition={[0,0.1,0]}
            Hovered={selectedRoom === "The Wave"}/>

            <Room 
            roomNumber="Room 280" 
            position={[1.56, 0, 1.99]}
            wallGeometry={nodes.Room_280.geometry} 
            floorGeometry={nodes.Floor016.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel} 
            Hovered={selectedRoom === "Room 280"}/>

            <Room 
            roomNumber="Careers & Experience Centre 210" 
            position={[-2.17, 0, -1.86]}
            wallGeometry={nodes['Careers_&_Experience_Centre_210'].geometry} 
            floorGeometry={nodes.Floor001.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Careers & Experience Centre 210"}/>

             <Room 
            roomNumber="Community Room 269" 
            position={[-0.21, 0, -1.26]}
            wallGeometry={nodes.Room_269.geometry} 
            floorGeometry={nodes.Floor017.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]} 
            Hovered={selectedRoom === "Community Room 269"}/>

            <Room 
            roomNumber="Bathroom #2" 
            position={[0.36, 0, -0.52]}
            wallGeometry={nodes['Bathroom_#2'].geometry} 
            floorGeometry={nodes.Floor004.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Bathroom #2"}/>

            <Room 
            roomNumber="Bathroom #1" 
            position={[-1.58, 0, -1.54]}
            wallGeometry={nodes['Bathroom_#1'].geometry} 
            floorGeometry={nodes.Floor015.geometry} 
            wallMaterial={materials.Wall_material} 
            floorMaterial={materials.Floor_material} 
            handleFloorClick={handleFloorClick} 
            onHover={onHover} 
            onUnhover={onUnhover} 
            hoveredRoom={hoveredRoom} 
            showPopup={showPopup} 
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Bathroom #1"}/>

            <Room 
            roomNumber="Bathroom #3" 
            position={[0.26, 0, 1.4]}
            wallGeometry={nodes['Bathroom_#3'].geometry} 
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
            Hovered={selectedRoom === "Bathroom #3"}/>
            </>
            
      <mesh geometry={nodes.Stairs.geometry} material={materials.Dark} position={[-2.33, 0, -1.99]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-0.38, -0.09, -4.02]} rotation={[0, 1.57, 0]} scale={[0.19, 0.98, 0.37]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[1.08, 0, -0.88]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-0.65, -0.02, -1.71]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[-0.28, 0, 1.28]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs005.geometry} material={materials.Dark} position={[1.72, 0, 1.94]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs006.geometry} material={materials.Dark} position={[1.94, 0, 3.17]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs007.geometry} material={materials.Dark} position={[-2.05, 0, 0.86]} rotation={[-Math.PI, 0.7, -Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.McKeller_Text.geometry} material={materials.Text} position={[0.73, 0.03, 0.11]} rotation={[0, -Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes['westernu-logo-student-experience-stacked'].geometry} material={materials['westernu-logo-student-experience-stacked']} position={[-2.17, 0.03, -0.21]} rotation={[0, -Math.PI / 2, 0]} scale={[0.5, 1, 0.5]} />
      <mesh geometry={nodes.CHRW_Text.geometry} material={materials.Text} position={[-1.27, 0.02, -2.44]} rotation={[0, -Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.Gazette_Text.geometry} material={materials.Text} position={[0.14, 0.02, -3.65]} rotation={[0, -Math.PI / 2, 0]} scale={0.5} />
    </group>
  )
}