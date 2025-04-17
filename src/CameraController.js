// CameraController.js
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useThree } from '@react-three/fiber';

const CameraController = forwardRef(({ initialZoom = 20, onZoomChange }, ref) => {
  const { camera } = useThree();
  const minFov = 10; 
  const maxFov = 50; 
  
  useEffect(() => {
    console.log("CameraController: Setting FOV to", initialZoom);
    camera.fov = initialZoom;
    camera.updateProjectionMatrix();
  }, [camera, initialZoom]);

  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      const newZoom = Math.max(camera.fov - 5, minFov);
      if (onZoomChange) {
        onZoomChange(newZoom);
      } else {
        camera.fov = newZoom;
        camera.updateProjectionMatrix();
      }
      console.log("zoomIn called, new FOV:", newZoom);
    },
    zoomOut: () => {
      const newZoom = Math.min(camera.fov + 5, maxFov);
      if (onZoomChange) {
        onZoomChange(newZoom);
      } else {
        camera.fov = newZoom;
        camera.updateProjectionMatrix();
      }
      console.log("zoomOut called, new FOV:", newZoom);
    }
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        camera.position.set(40, 50, 0);
      } else {
        camera.position.set(40, 25, 0);
      }
      camera.updateProjectionMatrix();
    };

    // Add wheel event listener for scroll zooming
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        const newZoom = Math.min(camera.fov + 1, maxFov);
        if (onZoomChange) {
          onZoomChange(newZoom);
        } else {
          camera.fov = newZoom;
          camera.updateProjectionMatrix();
        }
      } else {
        const newZoom = Math.max(camera.fov - 1, minFov);
        if (onZoomChange) {
          onZoomChange(newZoom);
        } else {
          camera.fov = newZoom;
          camera.updateProjectionMatrix();
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [camera, onZoomChange]);

  return null;
});

export default CameraController;
