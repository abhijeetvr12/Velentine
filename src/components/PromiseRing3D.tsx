import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, Suspense } from 'react';
import { Torus, Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Ring = ({ hovered, clicked }: { hovered: boolean; clicked: boolean }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z = -state.clock.elapsedTime * 0.15;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group>
        {/* Main Ring */}
        <Torus
          ref={ringRef}
          args={[1.2, 0.15, 32, 100]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color={hovered ? '#E6C27A' : '#D4A574'}
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </Torus>

        {/* Inner decorative ring */}
        <Torus
          args={[1.0, 0.05, 16, 100]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#FFE4C4"
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>

        {/* Glow effect sphere */}
        <mesh ref={glowRef} scale={clicked ? 2.5 : 1.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={clicked ? '#E6C27A' : '#FADADD'}
            transparent
            opacity={clicked ? 0.3 : 0.15}
            distort={0.3}
            speed={2}
          />
        </mesh>

        {/* Heart in center */}
        <mesh position={[0, 0.3, 0.5]} scale={hovered ? 0.4 : 0.3}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#E8A0B5"
            metalness={0.3}
            roughness={0.5}
            emissive="#E8A0B5"
            emissiveIntensity={clicked ? 0.8 : 0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

const PromiseRing3D = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lavender/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-effect shadow-romantic interactive"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FADADD" />
                <spotLight
                  position={[0, 5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={clicked ? 2 : 1}
                  color={clicked ? '#E6C27A' : '#FFFFFF'}
                />
                <Ring hovered={hovered} clicked={clicked} />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              Symbol of Forever
            </span>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              <span className="text-foreground">A Ring of</span>
              <br />
              <span className="text-gradient-gold">Eternal Promise</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Like this ring that has no end, my promise to you is infinite. 
              Click the ring to see it glow with the warmth of our love.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span>Hover to illuminate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span>Click for magic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromiseRing3D;
