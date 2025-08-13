// components/GLBModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

type GLBModelProps = {
  modelPath: string;
};

const GLBModel = ({ modelPath }: GLBModelProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }} >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 5]} intensity={1.8} />
      <Suspense fallback={null}>
        <Model url={modelPath} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default GLBModel;

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<{rotation:{y:number}}>(null);

  useFrame(() => {
    if (modelRef.current) {
      // Rotate on x-axis slightly for effect
      modelRef.current.rotation.y += 0.010;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
      // className="model bg-[#000] border-4 "
    />
  );
};
