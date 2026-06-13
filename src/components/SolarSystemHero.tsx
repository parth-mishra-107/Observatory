"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Ring, Stars } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFAA00"
        emissiveIntensity={10}
      />
    </mesh>
  );
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <Ring
      args={[radius - 0.02, radius + 0.02, 128]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshBasicMaterial
        color="#60a5fa"
        transparent
        opacity={0.15}
      />
    </Ring>
  );
}

function SaturnRing() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.95, 1.5, 64]} />
      <meshBasicMaterial
        color="#d8c28f"
        side={THREE.DoubleSide}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}
const planetInfo = {
  Mercury: {
    moons: 0,
    fact: "Closest planet to the Sun",
  },
  Venus: {
    moons: 0,
    fact: "Hottest planet in the Solar System",
  },
  Earth: {
    moons: 1,
    fact: "Only known planet with life",
  },
  Mars: {
    moons: 2,
    fact: "Known as the Red Planet",
  },
  Jupiter: {
    moons: 95,
    fact: "Largest planet in the Solar System",
  },
  Saturn: {
    moons: 146,
    fact: "Famous for its rings",
  },
  Uranus: {
    moons: 27,
    fact: "Rotates on its side",
  },
  Neptune: {
    moons: 14,
    fact: "Strongest winds in the Solar System",
  },
};

function Planet({
  name,
  size,
  distance,
  color,
  speed,
  onHover,
}: {
  name: string;
  size: number;
  distance: number;
  color: string;
  speed: number;
  onHover: (planet: string | null) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime() * speed;

    ref.current.position.x = Math.cos(t) * distance;
    ref.current.position.z = Math.sin(t) * distance;

    ref.current.rotation.y += 0.01;

    const targetScale = hovered ? 1.25 : 1;

    ref.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.08
    );
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => {
        setHovered(true);
        onHover(name);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />

      {name === "Saturn" && <SaturnRing />}
    </mesh>
  );
}

export default function SolarSystemHero() {
  const [selectedPlanet, setSelectedPlanet] =
    useState<string | null>(null);

  return (
<div className="relative h-[600px] w-full bg-black">      <Canvas camera={{ position: [0, 12, 28], fov: 60 }}>
        <Stars
          radius={200}
          depth={100}
          count={6000}
          factor={4}
          saturation={0}
          fade
        />

        <ambientLight intensity={0.3} />

        <pointLight
          position={[0, 0, 0]}
          intensity={600}
          color="#FFD700"
        />

        <pointLight
          position={[0, 0, 0]}
          intensity={400}
          color="#FFAA00"
        />

        <Sun />

        <OrbitRing radius={2} />
        <OrbitRing radius={3} />
        <OrbitRing radius={4} />
        <OrbitRing radius={5} />
        <OrbitRing radius={8} />
        <OrbitRing radius={11} />
        <OrbitRing radius={14} />
        <OrbitRing radius={17} />

        <Planet
          name="Mercury"
          size={0.12}
          distance={2}
          color="#eedf8c"
          speed={2.4}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Venus"
          size={0.22}
          distance={3}
          color="#d9b38c"
          speed={1.8}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Earth"
          size={0.25}
          distance={4}
          color="#2994ff"
          speed={1.5}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Mars"
          size={0.18}
          distance={5}
          color="#f1532b"
          speed={1.2}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Jupiter"
          size={0.8}
          distance={8}
          color="#dbb952"
          speed={0.6}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Saturn"
          size={0.7}
          distance={11}
          color="#c4a277"
          speed={0.45}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Uranus"
          size={0.5}
          distance={14}
          color="#7fffd4"
          speed={0.3}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Neptune"
          size={0.48}
          distance={17}
          color="#4973f3"
          speed={0.2}
  onHover={setSelectedPlanet}
        />

        <OrbitControls
          enablePan={false}
          minDistance={10}
          maxDistance={40}
        />
      </Canvas>
      {selectedPlanet && (
  <div className="absolute left-4 top-4 z-50 max-w-xs rounded-xl border border-blue-500/30 bg-slate-900/90 p-4 backdrop-blur">
    <h3 className="mb-2 text-xl font-bold text-white">
      {selectedPlanet}
    </h3>

    <p className="text-slate-300">
      Moons: {
        planetInfo[selectedPlanet as keyof typeof planetInfo].moons
      }
    </p>

    <p className="mt-2 text-slate-400">
      {
        planetInfo[selectedPlanet as keyof typeof planetInfo].fact
      }
    </p>
  </div>
)}
    </div>
  );
}