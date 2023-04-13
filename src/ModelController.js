import { useFrame } from "@react-three/fiber";

export const ModelController = ({lowerRef,atriumRef,level3Ref,level2Ref,selectedLevel}) => {
  useFrame(() => {
    if (lowerRef && lowerRef.current) {
      if (selectedLevel === "Lower Level") {
        lowerRef.current.position.set(5, 5, 0);
        lowerRef.current.rotation.set(0, 0, -0.2);
        lowerRef.current.visible = true;
      } else {
        lowerRef.current.visible = false;
      }
    }

    if (atriumRef && atriumRef.current) {
      if (selectedLevel === "Atrium") {
        atriumRef.current.position.set(5, 5, 0);
        atriumRef.current.rotation.set(0, 0, -0.2);
        atriumRef.current.visible = true;
      } else {
        atriumRef.current.visible = false;
      }
    }

    if (level3Ref && level3Ref.current) {
      if (selectedLevel === "Level 3") {
        level3Ref.current.position.set(5, 5, -1);
        level3Ref.current.rotation.set(0, 0, -0.2);
        level3Ref.current.visible = true;
      } else {
        level3Ref.current.visible = false;
      }
    }

    if (level2Ref && level2Ref.current) {
      if (selectedLevel === "Level 2") {
        level2Ref.current.position.set(5, 5, -2);
        level2Ref.current.rotation.set(0, 9.4, 0.2);
        level2Ref.current.visible = true;
      } else {
        level2Ref.current.visible = false;
      }
    }
  });

  return null;
};
