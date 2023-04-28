import Room from './Room'
import { useGLTF } from '@react-three/drei';

export function LowerLevel({lowerRef,handleFloorClick,onHover,onUnhover, hoveredRoom,currentLevel, props, showPopup, selectedRoom}) {
    const { nodes, materials } = useGLTF('/UCCLowerLevel.gltf');
      
  return (
    <group ref={lowerRef} {...props} dispose={null}>     
    <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-2.16, 0, -5.04]}>
        <mesh geometry={nodes.Floor031.geometry} material={materials.Floor_material} position={[0,-0.01,0]} />
      </mesh>

      <>
            <Room
            roomNumber="Rooms 11-32"
            position={[-2.36, 0, -3.74]}
            wallGeometry={nodes['Rooms_11-32'].geometry}
            floorGeometry={nodes.Floor.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Rooms 11-32"}/>
            
            <Room
            roomNumber="Bookstore Western"
            position={[-1.72, 0, -3.62]}
            wallGeometry={nodes.Bookstore_Western.geometry}
            floorGeometry={nodes.Floor001.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0,0.03,0]}
            Hovered={selectedRoom === "Bookstore Western"}/>


            <Room
            roomNumber="Grocery Store 73"
            position={[-0.42, 0, -0.12]}        
            wallGeometry={nodes.Grocery_Store_73.geometry}
            floorGeometry={nodes.Floor021.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Grocery Store 73"}/>

            <Room
            roomNumber="Lifetouch Photography 79"
            position={[-0.68, 0, -0.51]}
            wallGeometry={nodes.Lifetouch_Photography_79.geometry}
            floorGeometry={nodes.Floor023.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Lifetouch Photography 79"}/>

            <Room
            roomNumber="Room 78C"
            position={[-0.68, 0, -0.84]}
            wallGeometry={nodes.Room_78.geometry}
            floorGeometry={nodes.Floor022.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 78C"}/>

            <Room
            roomNumber="Peersupport 76"
            position={[-0.68, 0, -1.53]}
            wallGeometry={nodes.Peersupport_76.geometry}
            floorGeometry={nodes.Floor005.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Peersupport 76"}/>

            <Room
            roomNumber="Smooth Wax Bar 80"
            position={[-1.61, 0, -1.53]}
            wallGeometry={nodes.Smooth_Wax_Bar_80.geometry}
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
            Hovered={selectedRoom === "Smooth Wax Bar 80"}/>

            <Room
            roomNumber="Room 76A"
            position={[-1.22, 0, -1.53]}
            wallGeometry={nodes.Room_76A.geometry}
            floorGeometry={nodes.Floor017.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 76A"}/>

            <Room
            roomNumber="Room 75"
            position={[-0.2, 0, -0.93]}
            wallGeometry={nodes.Room_75.geometry}
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
            Hovered={selectedRoom === "Room 75"}/>

            <Room
            roomNumber="Western Chiropractic 49"
            position={[0.35, 0, 0.42]}
            wallGeometry={nodes.Western_Chiropractic_49.geometry}
            floorGeometry={nodes.Floor024.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Western Chiropractic 49"}/>

            <Room
            roomNumber="Starbucks"
            position={[2.23, 0, -2.86]}
            wallGeometry={nodes.Starbucks.geometry}
            floorGeometry={nodes.Floor007.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Starbucks"}/>

            <Room
            roomNumber="Life Labs 34A"
            position={[2.25, 0, -3.7]}
            wallGeometry={nodes.Life_Labs_34A.geometry}
            floorGeometry={nodes.Floor003.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Life Labs 34A"}/>

            <Room
            roomNumber="Campus Tours 53"
            position={[0.44, 0, 1.78]}
            wallGeometry={nodes.Room_53.geometry}
            floorGeometry={nodes.Floor034.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Campus Tours 53"}/>

            <Room
            roomNumber="Room 54B"
            position={[1.64, 0, 1.79]}
            wallGeometry={nodes.Room_54B.geometry}
            floorGeometry={nodes.Floor032.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 54B"}/>

            <Room
            roomNumber="Room 54A"
            position={[1.04, 0, 1.79]}
            wallGeometry={nodes.Room_54A.geometry}
            floorGeometry={nodes.Floor033.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 54A"}/>

            <Room
            roomNumber="Western Foot Patrol 57"
            position={[0.52, 0, 2.66]}
            wallGeometry={nodes.Room_57.geometry}
            floorGeometry={nodes.Floor043.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Western Foot Patrol 57"}/>

            <Room
            roomNumber="Room 66"
            position={[-1.57, 0, 1.18]}
            wallGeometry={nodes.Room_66.geometry}
            floorGeometry={nodes.Floor027.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 66"}/>

            <Room
            roomNumber="Room 61"
            position={[-0.9, 0, 3.04]}
            wallGeometry={nodes.Room_61.geometry}
            floorGeometry={nodes.Floor039.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 61"}/>
            
            <Room
            roomNumber="Room 60"
            position={[-0.9, 0, 2.5]}
            wallGeometry={nodes.Room_60.geometry}
            floorGeometry={nodes.Floor040.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 60"}/>

            <Room
            roomNumber="Room 59"
            position={[-0.35, 0, 2.51]}
            wallGeometry={nodes.Room_59.geometry}
            floorGeometry={nodes.Floor041.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 59"}/>

            <Room
            roomNumber="Room 63"
            position={[-0.56, 0, 1.9]}
            wallGeometry={nodes.Room_63.geometry}
            floorGeometry={nodes.Floor036.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 63"}/>

            <Room
            roomNumber="Room 58"
            position={[-0.35, 0, 3.05]}
            wallGeometry={nodes.Room_58.geometry}
            floorGeometry={nodes.Floor038.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 58"}/>

            <Room
            roomNumber="Room 65"
            position={[-0.57, 0, 1.43]}
            wallGeometry={nodes.Room_65.geometry}
            floorGeometry={nodes.Floor045.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 65"}/>

            <Room
            roomNumber="Room 67"
            position={[-0.56, 0, 0.95]}
            wallGeometry={nodes.Room_67.geometry}
            floorGeometry={nodes.Floor044.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 67"}/>

            <Room
            roomNumber="Room 41"
            position={[1.27, 0, 0.41]}
            wallGeometry={nodes.Room_41.geometry}
            floorGeometry={nodes.Floor026.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 41"}/>

            <Room
            roomNumber="Multifaith 38"
            position={[2.05, 0, -0.57]}
            wallGeometry={nodes.Multifaith_38.geometry}
            floorGeometry={nodes.Floor029.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Multifaith 38"}/>

            <Room
            roomNumber="Food Support Services 40F"
            position={[2, 0, 1.19]} 
            rotation={[0, 0, -Math.PI]} 
            scale={-1}
            wallGeometry={nodes.Food_Support_Services_40.geometry}
            floorGeometry={nodes.Floor030.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Food Support Services 40F"}/>

            <Room
            roomNumber="Room 47"
            position={[0.65, 0, 0.41]}
            wallGeometry={nodes.Room_47.geometry}
            floorGeometry={nodes.Floor025.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 47"}/>

            <Room
            roomNumber="Room 37"
            position={[1.69, 0, 0.26]} 
            rotation={[0, 0, -Math.PI]}
            scale={-1}
            wallGeometry={nodes.Room_37.geometry}
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
            Hovered={selectedRoom === "Room 37"}/>

            <Room
            roomNumber="Room 56"
            position={[1.91, 0, 2.65]}
            wallGeometry={nodes.Room_56.geometry}
            floorGeometry={nodes.Floor015.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Room 56"}/>

            <Room
            roomNumber="UCC Dental"
            position={[1.50, 0, -1.80]}
            wallGeometry={nodes.UCC_Dental.geometry}
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
            Hovered={selectedRoom === "UCC Dental"}/>

            <Room
            roomNumber="Room 36A"
            position={[1.14, 0, -1.26]}
            wallGeometry={nodes.Room_36A.geometry}
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
            Hovered={selectedRoom === "Room 36A"}/>


            <Room
            roomNumber="Campus Vision 36C"
            position={[0.46, 0.01, -1.37]}
            wallGeometry={nodes.Campus_Vision_36C.geometry}
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
            Hovered={selectedRoom === "Campus Vision 36C"}/>

             <Room
            roomNumber="Pharmacy"
            position={[0.2, 0.05, -0.94]}
            wallGeometry={nodes.Pharmacy.geometry}
            floorGeometry={nodes.Floor011.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.02, 0]}
            Hovered={selectedRoom === "Pharmacy"}/>

            <Room
            roomNumber="Bathroom #1"
            position={[-1.89, 0, -3.53]}
            wallGeometry={nodes.Bathroom_1.geometry}
            floorGeometry={nodes.Floor002.geometry}
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
            roomNumber="Bathroom Bookstore"
            position={[-1.3, 0, -2.08]}
            wallGeometry={nodes.Bookstore_Bathroom.geometry}
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
            Hovered={selectedRoom === "Bathroom Bookstore"}/>

            <Room
            roomNumber="Bathroom #2"
            position={[-0.16, 0, 0.92]}
            wallGeometry={nodes.Bathroom_2.geometry}
            floorGeometry={nodes.Floor014.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0,0.02,0]}
            Hovered={selectedRoom === "Bathroom #2"}/>

            <Room
            roomNumber="Bathroom #3"
            position={[1.65, 0, 1.3]}
            wallGeometry={nodes.Bathroom_3.geometry}
            floorGeometry={nodes.Floor019.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            Hovered={selectedRoom === "Bathroom #3"}/>

            <Room
            roomNumber="Room 34B"
            position={[2.24, 0, -3.23]}
            wallGeometry={nodes.Room_34B.geometry}
            floorGeometry={nodes.Floor004.geometry}
            wallMaterial={materials.Wall_material}
            floorMaterial={materials.Floor_material}
            handleFloorClick={handleFloorClick}
            onHover={onHover}
            onUnhover={onUnhover}
            hoveredRoom={hoveredRoom}
            showPopup={showPopup}
            currentLevel={currentLevel}
            floorPosition={[0, 0.01, 0]}
            Hovered={selectedRoom === "Room 34B"}/>
            </>

      <mesh geometry={nodes.Stairs.geometry} material={materials.Dark} position={[-0.28, 0, -1.48]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-2.51, 0, -0.95]} rotation={[0, -0.04, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[-2.49, 0, -1.87]} rotation={[-Math.PI, 0.04, -Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-1.9, 0, -3.92]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[1, 0, -2.14]} rotation={[Math.PI, -0.79, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs006.geometry} material={materials.Dark} position={[0.09, 0, 1.21]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs007.geometry} material={materials.Dark} position={[-0.26, 0, 2.3]} rotation={[0, 0, 0.04]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs008.geometry} material={materials.Dark} position={[-0.02, 0, 3.3]} rotation={[0, -Math.PI / 2, 0]} scale={[0.23, 0.98, 0.51]} />
      <mesh geometry={nodes['logo-bookstore-with-crest-horizontal'].geometry} material={materials['logo-bookstore-with-crest-horizontal']} position={[-0.49, 0.03, -2.74]} scale={0.65} />
      <mesh geometry={nodes['cropped-logo-mobile'].geometry} material={materials['cropped-logo-mobile']} position={[1.81, 0.02, -1.45]} rotation={[0, Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.foodsupport.geometry} material={materials.foodsupport} position={[2.32, 0.05, 0.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 1, 0.5]} />
      <mesh geometry={nodes.peersupport.geometry} material={materials.peersupport} position={[-0.86, 0.05, -1.26]} scale={[0.4, 1, 0.4]} />
      <mesh geometry={nodes.starbuckslogo.geometry} material={materials.starbuckslogo} position={[1.88, 0.05, -2.58]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 1, 0.5]} />
    </group>
    );
}