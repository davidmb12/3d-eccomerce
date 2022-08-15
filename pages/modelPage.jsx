import React from 'react'
import { useRouter } from 'next/router'
import { Canvas } from "@react-three/fiber"
import Box from '../components/threeJsComponents/Box'
import Floor from '../components/threeJsComponents/Floor'
import LightBulb from '../components/threeJsComponents/LightBulb'
import OrbitControls from '../components/threeJsComponents/OrbitControls'
import Dragabble from '../components/threeJsComponents/Dragabble'
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url'


function modelPage() {
  const router = useRouter();
  const data = router.query;
  return (
    <div className="grid grid-cols-3">
        <div className="col-span-2">
            <div className="gridh-full">
              <div className=" bg-slate-200 scene">
                <Canvas 
                  shadows={true}
                  className="canvas"
                  camera={{ position: [-6, 7, 7] }} 
                >
                  <ambientLight color={"white"} intensity={0.3}/>
                  <LightBulb position={[0, 3, 0]} />
                  <Box rotateX={3} rotateY= {0.2}/>
                  <OrbitControls />
                  <Floor position={[0,-1,0]}></Floor>
                </Canvas>
              </div>
              <div className="row-span-4 bg-slate-600">
                b
              </div>
            </div>
        </div>
        <div className="bg-slate-300">

        </div>
    </div>
  )
}

export default modelPage
