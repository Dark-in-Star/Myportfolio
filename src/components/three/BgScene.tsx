"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

// Floating torus knot
function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 200, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.1}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

// Ambient floating spheres
function FloatingSphere({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1.5}>
      <Sphere args={[scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          opacity={0.7}
          transparent
        />
      </Sphere>
    </Float>
  );
}

// Particle field
function ParticleField() {
  const count = 200;
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      // Blue to purple gradient
      const t = Math.random();
      colors[i * 3] = 0.2 + t * 0.4;
      colors[i * 3 + 1] = 0.3 + t * 0.2;
      colors[i * 3 + 2] = 0.8 + t * 0.2;
    }
    return { positions, colors };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// Small floating geometries
function FloatingGeometries() {
  const shapes = useMemo(() => [
    { pos: [-3.5, 2, -2] as [number, number, number], type: "octahedron", color: "#a855f7", scale: 0.35 },
    { pos: [4, -1.5, -1] as [number, number, number], type: "icosahedron", color: "#06b6d4", scale: 0.3 },
    { pos: [-4, -2, 1] as [number, number, number], type: "tetrahedron", color: "#8b5cf6", scale: 0.4 },
    { pos: [3, 2.5, -2] as [number, number, number], type: "octahedron", color: "#3b82f6", scale: 0.25 },
  ], []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={1 + i * 0.3}
          rotationIntensity={1.5}
          floatIntensity={1.2}
        >
          <mesh position={shape.pos}>
            {shape.type === "octahedron" && <octahedronGeometry args={[shape.scale]} />}
            {shape.type === "icosahedron" && <icosahedronGeometry args={[shape.scale]} />}
            {shape.type === "tetrahedron" && <tetrahedronGeometry args={[shape.scale]} />}
            <meshStandardMaterial
              color={shape.color}
              metalness={0.7}
              roughness={0.15}
              wireframe={i % 2 === 0}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} color="#1e40af" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[5, -3, 2]} intensity={0.6} color="#0ea5e9" />

      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={0.5} />

      <TorusKnot />
      <FloatingSphere position={[-3, 1, -1]} color="#3b82f6" scale={0.5} speed={1.2} />
      <FloatingSphere position={[3.5, -1, -0.5]} color="#a855f7" scale={0.4} speed={0.9} />
      <FloatingSphere position={[0.5, 3, -2]} color="#06b6d4" scale={0.3} speed={1.5} />

      <FloatingGeometries />
      <ParticleField />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function BgScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
      {/* Subtle gradient overlay at bottom to blend with page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
