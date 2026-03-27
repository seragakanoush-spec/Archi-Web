import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls } from '@react-three/drei';

function AbstractArchitecture() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
      <meshStandardMaterial 
        color="#333333" 
        wireframe={true} 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls 
        global 
        config={{ mass: 2, tension: 500 }} 
        snap={{ mass: 4, tension: 1500 }} 
        rotation={[0, 0.3, 0]} 
        polar={[-Math.PI / 3, Math.PI / 3]} 
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <AbstractArchitecture />
      </PresentationControls>
      <Environment preset="city" />
    </Canvas>
  );
}
