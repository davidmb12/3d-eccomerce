import React from 'react'

function Floor(props) {
  return (
    <mesh {...props} receiveShadow={true}>
        <boxBufferGeometry args={[10, 0.1, 10]} />
        <meshLambertMaterial color="white"/>
    </mesh>
  )
}

export default Floor
