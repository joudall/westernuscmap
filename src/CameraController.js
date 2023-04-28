// CameraController.js
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        camera.fov = 30;
        camera.position.set(40, 50, 0);
      } else {
        camera.fov = 20;
        camera.position.set(40, 25, 0);
      }
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera]);

  return null;
};

export default CameraController;
