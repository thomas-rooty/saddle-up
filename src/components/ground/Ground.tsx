import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Ground = () => {
  return (
    <RigidBody type="fixed" colliders={false} friction={0.1} name="ground">
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <CuboidCollider args={[50, 1, 50]} position={[0, -2, 0]} />
    </RigidBody>
  )
}

export default Ground
