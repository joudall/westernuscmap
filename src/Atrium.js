import { useGLTF } from '@react-three/drei';
import Room from './Room';

export function Atrium({atriumRef,showPopup,handleFloorClick,onHover,onUnhover, hoveredRoom,currentLevel, props, Hovered, selectedRoom}) {
  const { nodes, materials } = useGLTF('/UCCAtrium.gltf');
     
    return (
      <group ref={atriumRef} {...props} dispose={null}>
      <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-2.55, 0, -5.32]}>
        <mesh geometry={nodes.Floor013.geometry} material={materials.Floor_material} position={[0, -0.02, 0]}/>
      </mesh>

    <>
    <Room
      roomNumber="Room 146"
      position={[0.00, 0, 0.3]}
      wallGeometry={nodes.Room_146.geometry}
      floorGeometry={nodes.Floor007.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Room 146"}/>

   <Room
      roomNumber="Mustang Lounge East"
      position={[-2.67, 0, -0.43]}
      wallGeometry={nodes.Mustang_Lounge_East.geometry}
      floorGeometry={nodes.Floor003.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      floorPosition={[0, -0.01, 0]}      
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Mustang Lounge East"}/>

    <Room
      roomNumber="Centre Spot"
      position={[-0.71, 0, -3.5]}
      wallGeometry={nodes.Centre_Spot.geometry}
      floorGeometry={nodes.Floor001.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      floorPosition={[0, -0.01, 0]}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Centre Spot"}/>

    <Room
      roomNumber="InfoSource"
      position={[-1.3, 0, -2.29]} 
      scale={[1.1, 1, 1]}      
      wallGeometry={nodes.InfoSource.geometry}
      floorGeometry={nodes.Floor004.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      floorPosition={[0, 0.02, 0]}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "InfoSource"}/>

    <Room
      roomNumber="Atrium Lounge"
      position={[0.83, 0, -2.04]}
      scale={[1.1, 1, 1]}      
      wallGeometry={nodes.Atrium_Lounge.geometry}
      floorGeometry={nodes.Floor.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      floorPosition={[0, 0.02, 0]}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Atrium Lounge"}/>

    <Room
      roomNumber="The Spoke"
      position={[1.45, 0, -2.11]} 
      scale={[1.1, 1, 1]}      
      wallGeometry={nodes.The_Spoke.geometry}
      floorGeometry={nodes.Floor012.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "The Spoke"}/>

    <Room
      roomNumber="Mustang Lounge West"
      position={[-2.67, 0, 1.51]} 
      wallGeometry={nodes.Mustang_Lounge_West.geometry}
      floorGeometry={nodes.Floor006.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Mustang Lounge West"}/>

    <Room
      roomNumber="Room 147B"
      position={[0.54, 0, 1.78]} 
      scale={[1.1, 1, 1]}
      wallGeometry={nodes.Room_147B.geometry}
      floorGeometry={nodes.Floor010.geometry}
      wallMaterial={materials.Wall_material}
      floorMaterial={materials.Floor_material}
      handleFloorClick={handleFloorClick}
      onHover={onHover}
      onUnhover={onUnhover}
      hoveredRoom={hoveredRoom}
      showPopup={showPopup}
      currentLevel={currentLevel}
      Hovered={selectedRoom === "Room 147B"}/>

    <Room
        roomNumber="Room 185A"
        position={[-2.65, 0.01, -3.91]} 
        scale={[1.1, 1, 1]}
        wallGeometry={nodes.Room_185A.geometry}
        floorGeometry={nodes.Floor002.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}
        Hovered={selectedRoom === "Room 185A"}/>

      <Room
        roomNumber="Room 147A"
        position={[1.19, 0, 1.78]} 
        scale={[1.1, 1, 1]}
        wallGeometry={nodes.Room_147A.geometry}
        floorGeometry={nodes.Floor011.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}
        Hovered={selectedRoom === "Room 147A"}/>

      <Room
        roomNumber="Purple Bikes 149"
        position={[-0.11, 0, 1.79]} 
        scale={[1.1, 1, 1]}
        wallGeometry={nodes.Room_149.geometry}
        floorGeometry={nodes.Floor009.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}
        Hovered={selectedRoom === "Purple Bikes 149"}/>

      <Room
        roomNumber="Booster Juice"
        position={[-0.87, 0.01, -1.28]} 
        scale={[1.1, 1, 1]}
        wallGeometry={nodes.Booster_Juice.geometry}
        floorGeometry={nodes.Floor014.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}
        Hovered={selectedRoom === "Booster Juice"}/>

      <Room
        roomNumber="UCC Bathroom"
        position={[0.75, 0, -0.21]} 
        scale={[1.1, 1, 1]}
        wallGeometry={nodes.UCC_Bathroom.geometry}
        floorGeometry={nodes.Floor008.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}
        Hovered={selectedRoom === "UCC Bathroom"}/>

      <Room
        roomNumber="Bathroom Mustang"
        position={[-0.35, 0.01, 0.25]}
        scale={[1.1, 1, 1]}
        wallGeometry={nodes['Bathroom_-_Mustang'].geometry}
        floorGeometry={nodes.Floor005.geometry}
        wallMaterial={materials.Wall_material}
        floorMaterial={materials.Floor_material}
        handleFloorClick={handleFloorClick}
        onHover={onHover}
        onUnhover={onUnhover}
        hoveredRoom={hoveredRoom}
        showPopup={showPopup}
        currentLevel={currentLevel}     
        Hovered={selectedRoom === "Bathroom Mustang"}/>
        </>

      <mesh geometry={nodes.Stairs008.geometry} material={materials.Dark} position={[1.92, 0, -3.51]} rotation={[Math.PI, -0.69, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs005.geometry} material={materials.Dark} position={[-0.13, -0.02, 2.78]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-0.51, 0, -3.01]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[-0.52, -0.02, 1.37]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs.geometry} material={materials.Stairs_material} position={[-3, 0, -4.37]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-2.84, 0, -4.02]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[-1.86, 0, -0.55]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs006.geometry} material={materials.Dark} position={[0.27, 0.02, 0.11]} rotation={[0, -1.57, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs007.geometry} material={materials.Dark} position={[-2.45, -0.02, 0.09]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Centre_Spot_Text.geometry} material={materials['Dark.001']} position={[-1.43, 0.05, -3.52]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Mustang_Lounge_E.geometry} material={materials['Dark.002']} position={[-1.5, 0.05, 0.57]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Mustang_Lounge_W.geometry} material={materials['Dark.003']} position={[-1.44, 0.05, 2.46]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes['InfoSource-Logo-white-bg'].geometry} material={materials['InfoSource-Logo-white-bg']} position={[-0.72, 0.05, -1.75]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 1, 0.3]} />
      <mesh geometry={nodes.thespoke.geometry} material={materials.thespoke} position={[2.1, 0.04, -1.58]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

  