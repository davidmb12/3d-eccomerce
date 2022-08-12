import React from 'react'
import { Canvas } from "@react-three/fiber"
function modelPage() {
  return (
    <div className="grid grid-cols-3">
        <div className="col-span-2">
            <div className="grid grid-flow-row grid-rows-5 h-full">
              <div className="row-span-1 bg-slate-200 scene">
                <Canvas 
                  shadows={true}
                  className="canvas"
                  camera={{ position: [-6, 7, 7] }} 
                  children={undefined}
                ></Canvas>
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
