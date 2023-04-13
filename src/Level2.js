import * as THREE from 'three';
import {useState} from 'react'
import {useGLTF} from '@react-three/drei'

export function Level2({level2Ref, showPopup, handleFloorClick , props}) {
    const { nodes, materials } = useGLTF('/UCCLevel2.gltf');
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
      <group ref={level2Ref} {...props} dispose={null}>
        <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-2.16, 0, -3.95]}>
            <mesh geometry={nodes.Floor020.geometry} material={materials.Floor_material} position={[0, -0.02, 0]}/>
            </mesh>
        
        <mesh geometry={nodes.Room_251.geometry} material={materials.Wall_material} position={[-1.75, 0, -3.14]}>
                <mesh geometry={nodes.Baseboard.geometry} material={materials.Baseboard_material} />
                <mesh geometry={nodes.Floor006.geometry} material={hoveredRoom === "Room 251" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 251");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }}
                onClick={(event) => {handleFloorClick(event,'Level 2','Room 251'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Digital_USC_Room.geometry} material={materials.Wall_material} position={[-0.35, 0, -2.02]}>
                <mesh geometry={nodes.Floor008.geometry}material={hoveredRoom === "Digital USC Room" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Digital USC Room");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]}
                onClick={(event) => {handleFloorClick(event,'Level 2','Digital USC Room'); showPopup(); }}/> 
            </mesh>

            <mesh geometry={nodes.Gazette.geometry} material={materials.Wall_material} position={[-0.1, 0, -2.87]}>
                <mesh geometry={nodes.Floor007.geometry}material={hoveredRoom === "Gazette" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Gazette");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event, 'Level 2','Gazette'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Mustang_Lounge_&_Fireplace_Lounge'].geometry} material={materials.Purple} position={[0.17, 0, -1.91]}>
                <mesh geometry={nodes.Baseboard003.geometry} material={materials.Baseboard_material} />
                <mesh geometry={nodes.Floor012.geometry} material={hoveredRoom === "Mustang Lounge & Fireplace Lounge" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Mustang Lounge & Fireplace Lounge");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event, 'Level 2','Mustang Lounge & Fireplace Lounge'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Room_#1'].geometry} material={materials.Wall_material} position={[0.62, 0, -1.26]}>
                <mesh geometry={nodes.Floor011.geometry} material={hoveredRoom === "Room #1" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room #1");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','Room #1'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Room_#2'].geometry} material={materials.Wall_material} position={[0.25, 0, -1.27]}>
                <mesh geometry={nodes.Floor009.geometry} material={hoveredRoom === "Room #2" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room #2");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]}
                onClick={(event) => {handleFloorClick(event,'Level 2','Room #2'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Elevator.geometry} material={materials.Wall_material} position={[0.35, 0, -0.53]}>
                <mesh geometry={nodes.Floor010.geometry} material={hoveredRoom === "Elevator" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Elevator");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Level 2','Elevator'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Room_270.geometry} material={materials.Wall_material} position={[1.14, 0, -1.03]}>
                <mesh geometry={nodes.Floor014.geometry} material={hoveredRoom === "Room 270" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 270");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.01, 0]} 
                onClick={(event) => {handleFloorClick(event, 'Level 2','Room 270'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Room_249.geometry} material={materials.Wall_material} position={[-2.05, 0, -2.09]}>
                <mesh geometry={nodes.Baseboard008.geometry} material={materials.Baseboard_material} />
                <mesh geometry={nodes.Floor015.geometry} material={hoveredRoom === "Room 249" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 249");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Level 2','Room 249'); showPopup(); }}/> 
            </mesh>

            <mesh geometry={nodes['Room_#4'].geometry} material={materials.Wall_material} position={[-0.92, 0, -1.87]}>
                <mesh geometry={nodes.Floor018.geometry} material={hoveredRoom === "Room #4" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room #4");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','Room #4'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.CHRW.geometry} material={materials.Wall_material} position={[-1.62, 0, -1.87]}>
                <mesh geometry={nodes.Floor005.geometry} material={hoveredRoom === "CHRW" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "CHRW");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','CHRW'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['271_to_279'].geometry} material={materials.Wall_material} position={[1.56, 0, 1.47]}>
                <mesh geometry={nodes.Floor013.geometry} material={hoveredRoom === "271 to 279" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "271 to 279");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2',"271 to 279"); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.McKeller_Room.geometry} material={materials.Wall_material} position={[0.12, 0, 0.71]}>
                <mesh geometry={nodes.Floor002.geometry} material={hoveredRoom === "McKeller Room" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "McKeller Room");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','McKeller Room'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.The_Wave.geometry} material={materials.Wall_material} position={[0.34, 0, 3.12]}>
                <mesh geometry={nodes.Floor.geometry} material={hoveredRoom === "The Wave" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "The Wave");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Level 2','The Wave'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Room_280.geometry} material={materials.Wall_material} position={[1.56, 0, 2.02]}>
                <mesh geometry={nodes.Floor016.geometry}material={hoveredRoom === "Room 280" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room 280");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','Room 280'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Careers_&_Experience_Centre_210'].geometry} material={materials.Wall_material} position={[-2.17, 0, -1.86]}>
                <mesh geometry={nodes.Floor001.geometry} material={hoveredRoom === "Careers & Experience Centre 210" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Careers & Experience Centre 210");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','Careers & Experience Centre 210'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Room_#3'].geometry} material={materials.Wall_material} position={[-0.13, -0.02, -1.27]}>
                <mesh geometry={nodes.Floor017.geometry} material={hoveredRoom === "Room #3" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Room #3");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                 onClick={(event) => {handleFloorClick(event,'Level 2','Room #3'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Bathroom_#2'].geometry} material={materials.Wall_material} position={[0.34, 0, -0.53]}>
                <mesh geometry={nodes.Floor004.geometry} material={hoveredRoom === "Bathroom #2" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom #2");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Level 2','Bathroom #2'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Bathroom_#1'].geometry} material={materials.Wall_material} position={[-1.6, 0, -1.53]}>
                <mesh geometry={nodes.Floor019.geometry} material={hoveredRoom === "Bathroom #1" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom #1");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} onClick={(event) => {handleFloorClick(event,'Level 2','Bathroom #1'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes['Bathroom_#3'].geometry} material={materials.Wall_material} position={[0.27, 0, 1.41]}>
                <mesh geometry={nodes.Floor003.geometry} material={hoveredRoom === "Bathroom #3" 
                ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
                : new THREE.MeshBasicMaterial({ color: materials.Floor_material.color, side: THREE.DoubleSide }) }
                onPointerOver={(event) => {
                    onHover(event, "Bathroom #3");
                }}
                onPointerOut={(event) => {
                    onUnhover(event);
                }} position={[0, 0.02, 0]} 
                onClick={(event) => {handleFloorClick(event,'Level 2','Bathroom #3'); showPopup(); }}/>
            </mesh>

            <mesh geometry={nodes.Stairs.geometry} material={materials.Dark} position={[-2.33, 0, -1.99]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-0.38, 0, -4.02]} rotation={[0, 1.57, 0]} scale={[0.19, 0.98, 0.37]} />
            <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[1.08, 0, -0.87]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-1.15, 0, -1.71]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[-0.28, 0, 1.28]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs005.geometry} material={materials.Dark} position={[1.72, -0.02, 1.94]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs006.geometry} material={materials.Dark} position={[1.94, -0.01, 3.17]} scale={[0.35, 0.98, 0.54]} />
            <mesh geometry={nodes.Stairs007.geometry} material={materials.Dark} position={[-2.05, 0, 1.1]} rotation={[0, 0.7, 0]} scale={[0.35, 0.98, 0.54]} />
    </group>
  )
}