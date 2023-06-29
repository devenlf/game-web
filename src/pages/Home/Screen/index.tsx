import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import ManPage from '@/components/walkMan'

function Box(props:any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref:any = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const HomePage: React.FC = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[100, 100, 100]} />
        <ManPage />
        <OrbitControls makeDefault />
      </Canvas>
            

      {/* <Canvas style={{width:'1000px', height:'600px'}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas> */}
      </>
  );
};

export default HomePage;
