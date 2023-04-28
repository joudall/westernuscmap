import * as THREE from "three";

const Room = ({
    roomNumber,
    position,
    wallGeometry,
    floorGeometry,
    wallMaterial,
    floorMaterial,
    handleFloorClick,
    floorPosition,
    currentLevel,
    onHover,
    onUnhover,
    rotation,
    scale,
    Hovered
  }) => {

    return (
      <group position={position} rotation={rotation} scale={scale}>
        <mesh
          geometry={wallGeometry}
          material={(Hovered)
            ? new THREE.MeshBasicMaterial({ color: 0x85817E, side: THREE.DoubleSide })
            : new THREE.MeshBasicMaterial({ color: wallMaterial.color, side: THREE.DoubleSide })
          }
          onPointerOver={(event) => onHover(event,roomNumber)}
          onPointerUp={(event) => onHover(event,roomNumber)}
          onPointerOut={onUnhover}
          onPointerCancel={onUnhover}
          onClick={(event) => handleFloorClick(event, currentLevel, roomNumber)}
        >
          <mesh
            geometry={floorGeometry}
            material={(Hovered)
              ? new THREE.MeshBasicMaterial({ color: 0x582C83, side: THREE.DoubleSide })
              : new THREE.MeshBasicMaterial({ color: floorMaterial.color, side: THREE.DoubleSide })
            }
            onPointerOver={(event) => onHover(event,roomNumber)}
            onPointerUp={(event) => onHover(event,roomNumber)}
            onPointerOut={onUnhover}
            onPointerCancel={onUnhover}
            onClick={(event) => handleFloorClick(event, currentLevel, roomNumber)}
            position={floorPosition || [0, -0.01, 0]}
          />
        </mesh>
      </group>
    );
  };

export default Room;
