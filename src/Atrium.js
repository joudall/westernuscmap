import * as THREE from 'three';
import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function Atrium({atriumRef,showPopup,hidePopup,popupVisible,handleFloorClick,props}) {
  const { nodes, materials } = useGLTF('/UCCAtrium.gltf');
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
     
    return (
      <group ref={atriumRef} {...props} dispose={null}>
        <mesh geometry={nodes.Room_146.geometry} material={materials.Wall_material} position={[0.01, 0, 0.3]}>
        <mesh geometry={nodes.Floor007.geometry} material={hoveredRoom === "Room 146" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Room 146");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={() => {handleFloorClick('Atrium','Room 146'); showPopup();}}/>
          </mesh>

        <mesh geometry={nodes.Mustang_Lounge_East.geometry} material={materials.Wall_material} position={[-2.67, 0, -0.43]}>
        <mesh geometry={nodes.Floor005.geometry} material={hoveredRoom === "Mustang Lounge East" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Mustang Lounge East");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event, 'Atrium','Mustang Lounge East') ; showPopup();}}
            position={[0,-0.01,0]}/>
          </mesh>

        <mesh geometry={nodes.Centre_Spot.geometry} material={materials.Wall_material} position={[-0.71, 0, -3.5]}>
        <mesh geometry={nodes.Floor001.geometry} material={hoveredRoom === "Centre Spot" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Centre Spot");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Centre Spot'); showPopup();}}
            position={[0,-0.01, 0]}/>
          </mesh>

        <mesh geometry={nodes.InfoSource.geometry} material={materials.Wall_material} position={[-1.34, 0, -2.16]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor004.geometry} material={hoveredRoom === "InfoSource" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "InfoSource");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','InfoSource') ; showPopup();}} position={[0,0.1,0]}/>
            </mesh>

        <mesh geometry={nodes.Atrium_Lounge.geometry} material={materials.Wall_material} position={[0.85, 0.01, -1.97]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor.geometry}  material={hoveredRoom === "Atrium Lounge" 
            ? new THREE.MeshBasicMaterial({ color:0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Atrium Lounge");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Atrium Lounge'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.The_Spoke.geometry} material={materials.Wall_material} position={[1.46, 0, -2.06]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor012.geometry} material={hoveredRoom === "The Spoke" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "The Spoke");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','The Spoke'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Mustang_Lounge_West.geometry} material={materials.Wall_material} position={[-2.67, 0, 1.51]}>
        <mesh geometry={nodes.Floor006.geometry} material={hoveredRoom === "Mustang Lounge West" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Mustang Lounge West");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Mustang Lounge West'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Room_147B.geometry} material={materials.Wall_material} position={[0.54, 0, 1.78]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor010.geometry} material={hoveredRoom === "Room 147B" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Room 147B");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Room 147B'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Room_185A.geometry} material={materials.Wall_material} position={[-2.66, 0.01, -3.91]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Baseboard002.geometry} material={materials.Baseboard_material} />
        <mesh geometry={nodes.Floor002.geometry} material={hoveredRoom === "Room 185A" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555,side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Room 185A");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Room 185A'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Room_147A.geometry} material={materials.Wall_material} position={[1.19, 0, 1.77]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Baseboard009.geometry} material={materials.Baseboard_material} />
        <mesh geometry={nodes.Floor011.geometry} material={hoveredRoom === "Room 147A" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Room 147A");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Room 147A'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Room_149.geometry} material={materials.Wall_material} position={[-0.14, 0, 1.79]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Baseboard.geometry} material={materials.Baseboard_material} />
        <mesh geometry={nodes.Floor009.geometry}  material={hoveredRoom === "Room 149" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Room 149");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Room 149'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.UCC_Bathroom.geometry} material={materials.Wall_material} position={[0.75, 0, -0.19]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor008.geometry} material={hoveredRoom === "UCC Bathroom" 
            ? new THREE.MeshBasicMaterial({ color:0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "UCC Bathroom");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','UCC Bathroom'); showPopup();}}/>
            </mesh>
          
        <mesh geometry={nodes['Bathroom_-_Mustang'].geometry} material={materials.Wall_material} position={[-1.15, 0, -0.44]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Floor014.geometry}  material={hoveredRoom === "Bathroom Mustang" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Bathroom Mustang");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Bathroom Mustang'); showPopup();}}/>
            </mesh>

        <mesh geometry={nodes.Booster_Juice.geometry} material={materials.Wall_material} position={[-1.35, 0, -1.29]} scale={[1.1, 1, 1]}>
        <mesh geometry={nodes.Baseboard001.geometry} material={materials.Baseboard_material} />
        <mesh geometry={nodes.Floor003.geometry} material={hoveredRoom === "Booster Juice" 
            ? new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
            onPointerOver={(event) => {
              onHover(event, "Booster Juice");
            }}
            onPointerOut={(event) => {
              onUnhover(event);
            }} onClick={(event) => {handleFloorClick(event,'Atrium','Booster Juice'); showPopup();}}/>
            </mesh>

      <mesh geometry={nodes.Stairs008.geometry} material={materials['Stairs_material.008']} position={[1.92, -0.03, -3.51]} rotation={[Math.PI, -0.69, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs005.geometry} material={materials['Stairs_material.006']} position={[-0.13, 0, 2.78]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials['Stairs_material.001']} position={[-0.53, 0, -3.02]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials['Stairs_material.002']} position={[-0.52, 0, 1.42]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs.geometry} material={materials.Stairs_material} position={[-3, -0.02, -4.37]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials['Stairs_material.003']} position={[-2.84, 0, -4.02]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials['Stairs_material.005']} position={[-1.86, 0, -0.84]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs006.geometry} material={materials['Stairs_material.007']} position={[0.27, 0, 0.11]} rotation={[0, -1.57, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs007.geometry} material={materials['Stairs_material.004']} position={[-2.45, 0, 0.09]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material } position={[-2.55, 0, -5.32]}>
        <mesh geometry={nodes.Floor013.geometry} material={materials.Floor_material} position={[0, -0.02, 0]}/>
      </mesh>
      </group>
  )
}

  