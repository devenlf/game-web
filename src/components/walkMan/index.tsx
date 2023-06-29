import { useLoader } from 'react-three-fiber';
import React from 'react'
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';


const ManPage: React.FC = () => {
  const mtl = useLoader(MTLLoader, '/3d/walkman1/walkman1.mtl');
  mtl.preload();
  const obj = useLoader(OBJLoader, '/3d/walkman1/walkman1.obj')
  obj.traverse((child: { isMesh: any; material: { name: string | number; }; }) => {
    if (child.isMesh) {
      child.material = mtl.materials[child.material.name];
    }
  });
  return (
    <group scale={0.2}>
        <primitive object={obj} scale={[0.01, 0.01, 0.01]} />
    </group>
  )

};

export default ManPage;
