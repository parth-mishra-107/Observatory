"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Ring, Stars } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Sun() {
  const sunTexture = useTexture("/textures/sun.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1.6, 64, 64]} />

      <meshStandardMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissive="#ff8800"
        emissiveIntensity={3}
        toneMapped={false}
      />
    </mesh>
  );
}

function AsteroidBelt() {
  const asteroids = Array.from({ length: 300 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 6.2 + Math.random() * 1.2;

    return {
      id: i,
      x: Math.cos(angle) * radius,
      z: Math.sin(angle) * radius,
      y: (Math.random() - 0.5) * 0.3,
      size: 0.02 + Math.random() * 0.04,
    };
  });

  return (
    <>
      {asteroids.map((a) => (
        <mesh
          key={a.id}
          position={[a.x, a.y, a.z]}
        >
          <sphereGeometry args={[a.size, 8, 8]} />
          <meshStandardMaterial color="#777777" />
        </mesh>
      ))}
    </>
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
    <mesh rotation={[Math.PI / 2.3, 0, 0]}>
      <ringGeometry args={[0.9, 1.8, 128]} />

      <meshBasicMaterial
        color="#ebc174"
        side={THREE.DoubleSide}
        transparent
        opacity={0.65}
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
  texturePath,
  onHover,
}: {
  name: string;
  size: number;
  distance: number;
  color: string;
  speed: number;
  texturePath: string;
  onHover: (planet: string | null) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const texture = useTexture(texturePath);

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
      <sphereGeometry args={[size, 64, 64]} />

      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
      />

      {name === "Saturn" && <SaturnRing />}
    </mesh>
  );
}

export default function SolarSystemHero() {
  const [selectedPlanet, setSelectedPlanet] =
    useState<string | null>(null);

  return (
<div className="relative mx-auto h-[500px] max-w-7xl overflow-hidden rounded-3xl border border-slate-800 bg-black">      <Canvas camera={{ position: [0, 12, 28], fov: 60 }}>
        <Stars
          radius={200}
          depth={100}
          count={6000}
          factor={4}
          saturation={0}
          fade
        />

        <ambientLight intensity={0.45} />

        <pointLight
  position={[0, 0, 0]}
  intensity={1200}
  color="#FFD700"
/>

<pointLight
  position={[0, 0, 0]}
  intensity={700}
  color="#FF8C00"
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
          color="#918d77"
          texturePath="/textures/mercury.jpg"
          speed={2.4}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Venus"
          size={0.22}
          distance={3}
          color="#fdb369"
          speed={1.8}
          texturePath="/textures/venus.jpg"
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Earth"
          size={0.25}
          distance={4}
          color="#2994ff"
          speed={1.5}
          texturePath="/textures/earth.jpg"
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Mars"
          size={0.18}
          texturePath="/textures/mars.jpg"
          distance={5}
          color="#f1532b"
          speed={1.2}
  onHover={setSelectedPlanet}
        />

        <AsteroidBelt />

        <Planet
          name="Jupiter"
          size={0.8}
          distance={8}
          texturePath="/textures/jupiter.jpg"
          color="#d18420"
          speed={0.6}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Saturn"
          size={0.7}
          distance={11}
          texturePath="/textures/saturn.jpg"
          color="#c4a277"
          speed={0.45}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Uranus"
          size={0.5}
          distance={14}
          texturePath="/textures/uranus.jpg"
          color="#7fffd4"
          speed={0.3}
  onHover={setSelectedPlanet}
        />

        <Planet
          name="Neptune"
          size={0.48}
          distance={17}
          color="#4973f3"
          texturePath="/textures/neptune.jpg"
          speed={0.2}
  onHover={setSelectedPlanet}
        />

        <OrbitControls
          enablePan={false}
          minDistance={10}
          maxDistance={40}
        />
      </Canvas>
      
<div className="absolute left-10 top-10 max-w-md">
  <h1 className="text-5xl font-bold text-white">
    Solar System Explorer
  </h1>

  <p className="mt-3 text-slate-300">
    Journey through our cosmic neighborhood.
  </p>
</div>
      
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
