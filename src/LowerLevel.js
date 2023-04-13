import * as THREE from 'three';
import { useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function LowerLevel({lowerRef,showPopup,handleFloorClick, props, isVisible}) {
  const { nodes, materials } = useGLTF('/UCCLowerLevel.gltf');
  const [hovered, setHovered] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState({});

  const onHover = (event, room) => {
    event.stopPropagation();
    setHovered(true);
    setHoveredRoom(room);
    };

  const onUnhover = (event) => {
    setHovered(false);
    setHoveredRoom(null);
  };
  
      
  return isVisible ? (
      <group ref={lowerRef} {...props} dispose={null}>
        <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material.walls} position={[-3.32, 0, -5.29]}>
            <mesh geometry={nodes.Floor046.geometry} material={materials.Floor_material} position={[0, -0.02, 0]} />
        </mesh>

        <mesh geometry={nodes['Rooms_11-32'].geometry} material={materials.Wall_material} position={[-3.51, 0, -3.92]}>
            <mesh geometry={nodes.Floor.geometry} material={hoveredRoom === "Room 11-32" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 11-32");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => { handleFloorClick(event,'Lower Level','Room 11-32'); showPopup(); }}/>
        </mesh>

        <mesh geometry={nodes.Bookstore_Western.geometry} material={materials.Wall_material} position={[-3, 0, -3.62]}>
            <mesh geometry={nodes.Floor001.geometry} material={hoveredRoom === "Bookstore Western" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bookstore Western");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0,-0.02,0]}
                onClick={(event) => {handleFloorClick(event,'Lower Level', 'Bookstore Western'); showPopup();}}/>
        </mesh>

        <mesh geometry={nodes.Room_73.geometry} material={materials.Wall_material} position={[-1.65, 0, -0.14]}>
            <mesh geometry={nodes.Floor021.geometry} material={hoveredRoom === "Room 73" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 73");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 73'); showPopup();}}/>
        </mesh>

      <mesh geometry={nodes.Room_79.geometry} material={materials.Wall_material} position={[-1.93, 0, -0.53]}>
        <mesh geometry={nodes.Floor023.geometry}material={hoveredRoom === "Room 79" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 79");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) =>{handleFloorClick(event,'Lower Level','Room 79'); showPopup();}} />
      </mesh>

      <mesh geometry={nodes.Room_78.geometry} material={materials.Wall_material} position={[-1.93, 0, -0.87]}>
        <mesh geometry={nodes.Floor022.geometry} material={hoveredRoom === "Room 78" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 78");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 78'); showPopup();}}/>

      </mesh>

      <mesh geometry={nodes.Peersupport_76.geometry} material={materials.Wall_material} position={[-1.93, 0, -1.54]}>
        <mesh geometry={nodes.Floor015.geometry} material={hoveredRoom === "Peersupport 76" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Peersupport 76");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) =>{handleFloorClick(event,'Lower Level','Peersuport 76');showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Smooth_Wax_Bar_80.geometry} material={materials.Wall_material} position={[-2.86, 0, -1.56]}>
        <mesh geometry={nodes.Floor020.geometry} material={hoveredRoom === "Smooth Wax Bar 80" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Smooth Wax Bar 80");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Smooth Wax Bar 80'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_76A.geometry} material={materials.Wall_material} position={[-2.44, 0, -1.56]}>
        <mesh geometry={nodes.Floor017.geometry}material={hoveredRoom === "Room 76A" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event,"Room 76A");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 76A'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_75.geometry} material={materials.Wall_material} position={[-1.37, 0, -0.94]}>
        <mesh geometry={nodes.Floor013.geometry} material={hoveredRoom === "Room 75" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 75");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]}
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 75'); showPopup();}} />
      </mesh>

      <mesh geometry={nodes.Western_Chiropractic_49.geometry} material={materials.Wall_material} position={[-0.84, 0, 0.33]}>
        <mesh geometry={nodes.Floor024.geometry} material={hoveredRoom === "Western Chiropractic 49" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Western Chiropractic 49");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) =>{handleFloorClick(event,'Lower Level','Western Chiropractic 49'); showPopup();}} />
      </mesh>

      <mesh geometry={nodes.Starbucks.geometry} material={materials.Wall_material} position={[0.52, 0, -3.02]}>
        <mesh geometry={nodes.Floor007.geometry} material={hoveredRoom === "Starbucks" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Starbucks");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Starbucks'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes['Room_34B-1'].geometry} material={materials.Wall_material} position={[0.52, 0, -2.67]}>
        <mesh geometry={nodes.Floor008.geometry} material={hoveredRoom === "Room 34B-1" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }/>
        </mesh>

      <mesh geometry={nodes['Room_34B-3'].geometry} material={materials.Wall_material} position={[0.53, 0, -3.4]}>
        <mesh geometry={nodes.Floor004.geometry} material={hoveredRoom === "Room 34B-3" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }/>
        </mesh>

      <mesh geometry={nodes['Room_34B-2'].geometry} material={materials.Wall_material} position={[0.97, 0, -2.81]}>
        <mesh geometry={nodes.Floor006.geometry} material={hoveredRoom === "Room 34B-2" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }/>
        </mesh>

      <mesh geometry={nodes['Room_34B-4'].geometry} material={materials.Wall_material} position={[0.96, 0, -3.39]}>
        <mesh geometry={nodes.Floor005.geometry} material={hoveredRoom === "Room 34B-4" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }/>
        </mesh>

      <mesh geometry={nodes.Room_34A.geometry} material={materials.Wall_material} position={[0.97, 0, -3.87]}>
        <mesh geometry={nodes.Floor003.geometry} material={hoveredRoom === "Room 34A" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 34A");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 34A');showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_53.geometry} material={materials.Wall_material} position={[-0.63, 0, 1.65]}>
        <mesh geometry={nodes.Floor034.geometry} material={hoveredRoom === "Room 53" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 53");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 53');showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_54B.geometry} material={materials.Wall_material} position={[0.57, 0, 1.65]}>
        <mesh geometry={nodes.Floor032.geometry} material={hoveredRoom === "Room 54B" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 54B");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room54B');showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_54A.geometry} material={materials.Wall_material} position={[-0.04, 0, 1.65]}>
        <mesh geometry={nodes.Floor033.geometry}material={hoveredRoom === "Room 54A" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 54A");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 54A');showPopup();}}/>
      </mesh>
      
      <mesh geometry={nodes.Room_57.geometry} material={materials.Wall_material} position={[-0.63, 0, 2.42]}>
        <mesh geometry={nodes.Floor043.geometry} material={hoveredRoom === "Room 57" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 57");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 57'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_66.geometry} material={materials.Wall_material} position={[-2.56, 0, 1.17]}>
        <mesh geometry={nodes.Floor037.geometry} material={hoveredRoom === "Room 66" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 66");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 66'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_61.geometry} material={materials.Wall_material} position={[-1.92, 0, 3]}>
        <mesh geometry={nodes.Floor039.geometry} material={hoveredRoom === "Room 61" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 61");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 61'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_60.geometry} material={materials.Wall_material} position={[-1.92, 0, 2.46]}>
        <mesh geometry={nodes.Floor040.geometry} material={hoveredRoom === "Room 60" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 60");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 60'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_59.geometry} material={materials.Wall_material} position={[-1.36, 0, 2.46]}>
        <mesh geometry={nodes.Floor041.geometry} material={hoveredRoom === "Room 59" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 59");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 59'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_63.geometry} material={materials.Wall_material} position={[-1.65, 0, 1.85]}>
        <mesh geometry={nodes.Floor036.geometry} material={hoveredRoom === "Room 63" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 63");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 63'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_58.geometry} material={materials.Wall_material} position={[-1.36, 0, 3]}>
        <mesh geometry={nodes.Floor038.geometry} material={hoveredRoom === "Room 58" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 58");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 58'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_65.geometry} material={materials.Wall_material} position={[-1.65, 0, 1.38]}>
        <mesh geometry={nodes.Floor045.geometry}material={hoveredRoom === "Room 65" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 65");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 65'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_67.geometry} material={materials.Wall_material} position={[-1.65, 0, 0.9]}>
        <mesh geometry={nodes.Floor044.geometry} material={hoveredRoom === "Room 67" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 67");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 67'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_41.geometry} material={materials.Wall_material} position={[0.14, 0, 0.31]}>
        <mesh geometry={nodes.Floor026.geometry} material={hoveredRoom === "Room 41" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 41");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 41'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_78C.geometry} material={materials.Wall_material} position={[-2.23, 0, -1.06]}>
        <mesh geometry={nodes.Floor016.geometry} material={hoveredRoom === "Room 78C" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 78C");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 78C'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Multifaith_38.geometry} material={materials.Wall_material} position={[0.87, 0, -0.79]}>
        <mesh geometry={nodes.Floor029.geometry} material={hoveredRoom === "Multifaith 38" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Multifaith 38");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Multifaith 38'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Food_Support_Services_40.geometry} material={materials.Wall_material} position={[0.87, 0, 0.98]} rotation={[0, 0, -Math.PI]} scale={-1}>
        <mesh geometry={nodes.Floor030.geometry} material={hoveredRoom === "Food Support Services 40" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Food Support Services 40");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Food Support Services 40'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_47.geometry} material={materials.Wall_material} position={[-0.44, 0, 0.33]}>
        <mesh geometry={nodes.Floor025.geometry} material={hoveredRoom === "Room 47" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 47");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 47'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_37.geometry} material={materials.Wall_material} position={[0.53, 0, 0.06]} rotation={[0, 0, -Math.PI]} scale={-1}>
        <mesh geometry={nodes.Floor028.geometry} material={hoveredRoom === "Room 37" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 37");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 37'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_56.geometry} material={materials.Wall_material} position={[0.74, 0, 2.42]}>
        <mesh geometry={nodes.Floor042.geometry} material={hoveredRoom === "Room 56" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 56");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 56'); showPopup();} }/>
      </mesh>

      <mesh geometry={nodes.Room_39.geometry} material={materials.Wall_material} position={[0.18, 0, -0.74]}>
        <mesh geometry={nodes.Floor027.geometry} material={hoveredRoom === "Room 39" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 39");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Room 39'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.UCC_Dental.geometry} material={materials.Wall_material} position={[0.27, 0, -1.94]}>
        <mesh geometry={nodes.Floor009.geometry} material={hoveredRoom === "UCC Dental" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "UCC Dental");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]}
                onClick={(event) => {handleFloorClick(event,'Lower Level','UCC Dental'); showPopup();}} />
      </mesh>

      <mesh geometry={nodes.Room_36A.geometry} material={materials.Wall_material} position={[-0.04, 0, -1.34]}>
        <mesh geometry={nodes.Floor010.geometry} material={hoveredRoom === "Room 36A" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 36A");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 36A');; showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Campus_Vision_36C.geometry} material={materials.Wall_material} position={[-0.74, 0.01, -1.46]}>
        <mesh geometry={nodes.Floor012.geometry} material={hoveredRoom === "Campus Vision 36C" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Campus Vision 36C");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Campus Vision 36C');; showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Pharmacy.geometry} material={materials.Wall_material} position={[-0.99, 0.05, -1.14]}>
        <mesh geometry={nodes.Floor011.geometry} material={hoveredRoom === "Pharmacy" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Pharmacy");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Pharmacy'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Bathroom_1.geometry} material={materials.Wall_material} position={[-3.14, 0, -3.63]}>
        <mesh geometry={nodes.Floor002.geometry} material={hoveredRoom === "Bathroom 1" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom 1");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Bathroom 1'); showPopup();}}/>
      </mesh>

     <mesh geometry={nodes.Bookstore_Bathroom.geometry} material={materials.Wall_material} position={[-2.59, 0, -2.17]}>
        <mesh geometry={nodes.Floor018.geometry} material={hoveredRoom === "Bathroom Bookstore" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom Bookstore");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Bathroom Bookstore');; showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Bathroom_2.geometry} material={materials.Wall_material} position={[-1.26, 0, 0.9]}>
        <mesh geometry={nodes.Floor035.geometry} material={hoveredRoom === "Bathroom 2" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom 2");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Bathroom 2');; showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Bathroom_3.geometry} material={materials.Wall_material} position={[0.56, 0, 1.16]}>
        <mesh geometry={nodes.Floor031.geometry} material={hoveredRoom === "Bathroom 3" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom 3");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Lower Level','Bathroom 3'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Room_36B.geometry} material={materials.Wall_material} position={[-0.73, 0.01, -1.45]}>
        <mesh geometry={nodes.Floor047.geometry} material={hoveredRoom === "Room 36B" 
                ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 36B");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event,'Lower Level','Room 36B'); showPopup();}}/>
      </mesh>

      <mesh geometry={nodes.Stairs.geometry} material={materials.Stairs_material} position={[-1.47, 0, -1.54]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials['Stairs_material.001']} position={[-3.67, 0, -0.92]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials['Stairs_material.002']} position={[-3.69, 0, -1.84]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials['Stairs_material.003']} position={[-2.99, 0, -4.08]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials['Stairs_material.004']} position={[-0.23, 0, -2.25]} rotation={[Math.PI, -0.87, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs006.geometry} material={materials['Stairs_material.006']} position={[-1.02, 0, 0.91]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs007.geometry} material={materials['Stairs_material.007']} position={[-1.4, 0, 2.28]} rotation={[0, -0.03, 0.04]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs008.geometry} material={materials['Stairs_material.008']} position={[-1.17, 0, 3.19]} rotation={[0, -1.5, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs009.geometry} material={materials['Stairs_material.009']} position={[0.73, 0, -0.92]} rotation={[0, -Math.PI / 4, 0]} scale={[0.35, 0.98, 0.54]} />
      </group>
      ) : null;
}