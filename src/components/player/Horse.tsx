import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useCharacterStore } from '../../../stores/character.store.ts'

type GLTFResult = GLTF & {
  nodes: {
    HorseBody: THREE.SkinnedMesh
    cs_arrow_cross_solid: THREE.Mesh
    cs_circle_ik: THREE.Mesh
    cs_ctrl_ik_solid_blue: THREE.Mesh
    cs_ctrl_ik_solid_red: THREE.Mesh
    cs_fk: THREE.Mesh
    cs_plane_4_fill: THREE.Mesh
    cs_pos_solid: THREE.Mesh
    cs_pos_solid_eye_offset_blue: THREE.Mesh
    cs_pos_solid_eye_offset_red: THREE.Mesh
    cs_solid_arrow_twist_blue: THREE.Mesh
    cs_solid_arrow_twist_red: THREE.Mesh
    cs_solid_bar_01: THREE.Mesh
    cs_solid_bar_blue: THREE.Mesh
    cs_solid_bar_red: THREE.Mesh
    cs_solid_circle_01: THREE.Mesh
    cs_solid_circle_02: THREE.Mesh
    cs_solid_circle_02_blue: THREE.Mesh
    cs_solid_circle_02_green: THREE.Mesh
    cs_solid_circle_02_red: THREE.Mesh
    cs_solid_ik002: THREE.Mesh
    cs_solid_ik002_1: THREE.Mesh
    cs_solid_ik002_2: THREE.Mesh
    cs_solid_ik002_3: THREE.Mesh
    cs_solid_circle_squashed_blue: THREE.Mesh
    cs_solid_circle_squashed_green: THREE.Mesh
    cs_solid_circle_squashed_red: THREE.Mesh
    cs_solid_eye_aim_blue: THREE.Mesh
    cs_solid_eye_aim_global: THREE.Mesh
    cs_solid_eye_aim_red: THREE.Mesh
    cs_solid_eyebrow_blue: THREE.Mesh
    cs_solid_eyebrow_red: THREE.Mesh
    cs_solid_fk_blue_1: THREE.Mesh
    cs_solid_fk_blue_2: THREE.Mesh
    cs_solid_fk_blue_3: THREE.Mesh
    cs_solid_fk_blue_4: THREE.Mesh
    cs_solid_plane_2: THREE.Mesh
    cs_solid_plane_2_blue: THREE.Mesh
    cs_solid_plane_2_red: THREE.Mesh
    cs_solid_plane_3: THREE.Mesh
    cs_solid_plane_3_blue: THREE.Mesh
    cs_solid_plane_3_red: THREE.Mesh
    cs_solid_plane_5_blue: THREE.Mesh
    cs_solid_plane_5_red: THREE.Mesh
    cs_solid_torus_04_blue: THREE.Mesh
    cs_solid_torus_04_red: THREE.Mesh
    cs_solid_torus_blue: THREE.Mesh
    cs_solid_torus_green: THREE.Mesh
    cs_solid_torus_red: THREE.Mesh
    cs_solid_triangle: THREE.Mesh
    c_pos: THREE.Bone
    c_foot_ikr: THREE.Bone
    c_leg_poler: THREE.Bone
    c_foot_ikl: THREE.Bone
    c_leg_polel: THREE.Bone
    root_refx: THREE.Bone
    c_foot_ik_dupli_001l: THREE.Bone
    c_leg_pole_dupli_001l: THREE.Bone
    c_foot_ik_dupli_001r: THREE.Bone
    c_leg_pole_dupli_001r: THREE.Bone
  }
  materials: {
    ['HorseBody.004']: THREE.MeshStandardMaterial
    cs_solid_green: THREE.MeshStandardMaterial
    cs_solid_blue: THREE.MeshStandardMaterial
    cs_solid_red: THREE.MeshStandardMaterial
    cs_buttons: THREE.MeshStandardMaterial
    cs_solid_grey: THREE.MeshStandardMaterial
    cs_solid_black: THREE.MeshStandardMaterial
  }
}

type ActionName = 'cs_user_c_spine_01.xAction' | '0Tpose' | '1Idle1' | '1Idle2' | '2galop'

const Horse = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/models/horse.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  const horseState = useCharacterStore((state) => state.horseState)

  useEffect(() => {
    const action = actions[horseState]
    if (action) {
      // Speed up the animation if its 2galop
      if (horseState === '2galop') {
        action.timeScale = 6
      }
      action.reset().fadeIn(0).play()
      return () => {
        action.fadeOut(0)
      }
    }
  }, [horseState])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="cs_user_c_spine_01x"
          position={[-0.0014216, 17.28271484, -2.4107666]}
          rotation={[3.12923578, 0, 0.0066041]}
          scale={[3.4891715, 3.48917127, 3.4891727]}
        />
        <group name="char_grp">
          <group name="rig" position={[0, -0.65246677, 0]}>
            <skinnedMesh
              name="HorseBody"
              geometry={nodes.HorseBody.geometry}
              material={materials['HorseBody.004']}
              skeleton={nodes.HorseBody.skeleton}
            />
            <primitive object={nodes.c_pos} />
            <primitive object={nodes.c_foot_ikr} />
            <primitive object={nodes.c_leg_poler} />
            <primitive object={nodes.c_foot_ikl} />
            <primitive object={nodes.c_leg_polel} />
            <primitive object={nodes.root_refx} />
            <primitive object={nodes.c_foot_ik_dupli_001l} />
            <primitive object={nodes.c_leg_pole_dupli_001l} />
            <primitive object={nodes.c_foot_ik_dupli_001r} />
            <primitive object={nodes.c_leg_pole_dupli_001r} />
          </group>
        </group>
        <group name="cs_grp">
          <group name="cs_arrow" position={[1.02509701, 0.0370061, 0.04398176]} scale={0.28297722} />
          <group name="cs_arrow_02" position={[1.3282764, 0.0370061, 0.04398176]} scale={0.28297722} />
          <group name="cs_arrow_03" position={[1.22776425, 0.0370061, 0.04398176]} scale={0.28297722} />
          <group name="cs_arrow_cross" position={[2.08169889, 0.0370061, 0.04398176]} scale={0.28297722} />
          <mesh
            name="cs_arrow_cross_solid"
            castShadow
            receiveShadow
            geometry={nodes.cs_arrow_cross_solid.geometry}
            material={materials.cs_solid_green}
            position={[-1.20252633, -1.33364904, 0.04398157]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.08396041}
          />
          <group name="cs_arrow_twist" position={[5.24631596, 0.30829918, 0.04585946]} />
          <group name="cs_base_finger" position={[-2.66995716, -0.15675002, 0.05272281]} scale={0.09799999} />
          <group name="cs_base_finger_end" position={[-2.89030576, -0.15675002, 0.05272281]} scale={0.09799999} />
          <group name="cs_box" position={[-2.3468399, -0.16026717, 0.05272281]} scale={0.70172542} />
          <group
            name="cs_box_head"
            position={[-3.90100527, 0.8100844, 0.38141674]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.07370438}
          />
          <group name="cs_c_eye" position={[-1.78458869, 0.17408791, 0.05272281]} scale={0.09799999} />
          <group name="cs_c_eyelid_micro" position={[-1.96139312, 0.17408791, 0.05272281]} scale={0.09799999} />
          <group name="cs_cheek_inflate" position={[0.53125656, 0.11661302, 0.05272281]} scale={0.09799999} />
          <group
            name="cs_circle_01"
            position={[0.03019899, -0.08672315, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <group
            name="cs_circle_02"
            position={[0.33000714, -0.07802862, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_circle_ik"
            castShadow
            receiveShadow
            geometry={nodes.cs_circle_ik.geometry}
            material={nodes.cs_circle_ik.material}
            position={[-0.2671288, -0.11323029, 0.05272281]}
            rotation={[Math.PI / 2, 2.7e-7, Math.PI / 2]}
            scale={0.09799999}
          />
          <group name="cs_circle_squashed" position={[0.53125656, -0.06137994, 0.05272281]} scale={0.09799999} />
          <mesh
            name="cs_ctrl_ik_solid_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_ctrl_ik_solid_blue.geometry}
            material={materials.cs_solid_blue}
            position={[5.16014814, -0.50796151, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_ctrl_ik_solid_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_ctrl_ik_solid_red.geometry}
            material={materials.cs_solid_red}
            position={[4.96339226, -0.50796151, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <group
            name="cs_cube"
            position={[-2.80327868, 0.86269104, 0.51469767]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.19230333}
          />
          <group
            name="cs_cube_02"
            position={[-3.44264126, 0.87308919, 0.38141683]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.07370438}
          />
          <group
            name="cs_cube_03"
            position={[-4.46790791, 0.67342627, 0.38141671]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.07370438}
          />
          <group name="cs_curve" position={[0.42219266, 0.51515448, 0.05272281]} scale={0.09799999} />
          <group
            name="cs_eye_aim"
            position={[-1.5537678, -0.08672315, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <group
            name="cs_eye_aim_global"
            position={[-1.7148813, -0.08672315, 0.05272278]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <group name="cs_eyelid" position={[-1.7850529, 0.07124104, 0.05272283]} scale={0.09799999} />
          <group name="cs_eyelid2" position={[-1.7881391, -0.02873085, -0.16513756]} scale={0.09799999} />
          <mesh
            name="cs_fk"
            castShadow
            receiveShadow
            geometry={nodes.cs_fk.geometry}
            material={nodes.cs_fk.material}
            position={[-1.60202742, 0.82202458, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <group name="cs_footl" position={[1.96650445, 0.47232398, 0.05272283]} scale={0.09799999} />
          <group name="cs_footr" position={[2.06727743, 0.47232398, 0.05272283]} scale={0.09799999} />
          <group name="cs_foot_fk" position={[-0.08299236, 0.28531188, 0.05272281]} scale={0.09799999} />
          <group name="cs_foot_roll" position={[-1.40867794, -0.15675002, 0.05272281]} scale={0.09799999} />
          <group name="cs_hand" position={[2.47648191, 0.47919524, -0.05070078]} scale={0.09799999} />
          <group
            name="cs_jaw"
            position={[2.44894528, 0.46104294, 0.04398182]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.28297722}
          />
          <group
            name="cs_jaw_square"
            position={[2.90723467, 0.46104294, 0.04398182]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.28297722}
          />
          <group name="cs_plane_1" position={[0.42219266, 0.28531188, 0.05272281]} scale={0.09799999} />
          <group
            name="cs_plane_2"
            position={[-1.06417131, 0.82202458, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <group
            name="cs_plane_3"
            position={[0.64268631, 0.00117856, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <group
            name="cs_plane_4"
            position={[0.84568924, 0.50125414, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_plane_4_fill"
            castShadow
            receiveShadow
            geometry={nodes.cs_plane_4_fill.geometry}
            material={materials.cs_buttons}
            position={[1.33779216, 0.50578487, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <group
            name="cs_plane_5"
            position={[0.8026219, 0.00117856, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <group
            name="cs_pos"
            position={[-2.07403803, 0.82202458, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_pos_solid"
            castShadow
            receiveShadow
            geometry={nodes.cs_pos_solid.geometry}
            material={materials.cs_solid_green}
            position={[-2.07403803, -1.2920413, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_pos_solid_eye_offset_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_pos_solid_eye_offset_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-2.58301115, -1.2920413, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.24543181}
          />
          <mesh
            name="cs_pos_solid_eye_offset_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_pos_solid_eye_offset_red.geometry}
            material={materials.cs_solid_red}
            position={[-3.0832777, -1.2920413, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.24543181}
          />
          <mesh
            name="cs_solid_arrow_twist_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_arrow_twist_blue.geometry}
            material={materials.cs_solid_blue}
            position={[2.26644278, -0.45959866, 0.04585921]}
            scale={0.25039205}
          />
          <mesh
            name="cs_solid_arrow_twist_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_arrow_twist_red.geometry}
            material={materials.cs_solid_red}
            position={[1.85860407, -0.45959866, 0.04585921]}
            scale={0.25039205}
          />
          <mesh
            name="cs_solid_bar_01"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_bar_01.geometry}
            material={materials.cs_solid_green}
            position={[-1.91615796, -0.49842191, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_bar_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_bar_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-6.03423595, -0.42167735, 0.2311312]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_bar_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_bar_red.geometry}
            material={materials.cs_solid_red}
            position={[-4.87421846, -0.49842191, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_circle_01"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_01.geometry}
            material={materials.cs_solid_green}
            position={[0.03019899, -0.51476127, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_circle_02"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_02.geometry}
            material={materials.cs_solid_grey}
            position={[0.52385974, -0.51476127, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_circle_02_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_02_blue.geometry}
            material={materials.cs_solid_blue}
            position={[0.87639409, -0.51476127, 0.05272284]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_circle_02_green"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_02_green.geometry}
            material={materials.cs_solid_green}
            position={[0.32641953, -0.51476127, 0.05272284]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_circle_02_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_02_red.geometry}
            material={materials.cs_solid_red}
            position={[0.69998866, -0.51476127, 0.05272284]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <group
            name="cs_solid_circle_ik_blue"
            position={[-4.07155418, -0.4816694, 0.05272272]}
            rotation={[-Math.PI / 2, -5.4e-7, Math.PI / 2]}
            scale={0.13326661}
          >
            <mesh
              name="cs_solid_ik002"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_ik002.geometry}
              material={materials.cs_solid_blue}
            />
            <mesh
              name="cs_solid_ik002_1"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_ik002_1.geometry}
              material={materials.cs_solid_black}
            />
          </group>
          <group
            name="cs_solid_circle_ik_red"
            position={[-3.22634816, -0.4816694, 0.05272272]}
            rotation={[-Math.PI / 2, -5.4e-7, Math.PI / 2]}
            scale={0.13326661}
          >
            <mesh
              name="cs_solid_ik002_2"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_ik002_2.geometry}
              material={materials.cs_solid_red}
            />
            <mesh
              name="cs_solid_ik002_3"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_ik002_3.geometry}
              material={materials.cs_solid_black}
            />
          </group>
          <mesh
            name="cs_solid_circle_squashed_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_squashed_blue.geometry}
            material={materials.cs_solid_blue}
            position={[0.10200676, -1.15164459, 0.59769231]}
            scale={0.37388334}
          />
          <mesh
            name="cs_solid_circle_squashed_green"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_squashed_green.geometry}
            material={materials.cs_solid_green}
            position={[-0.42864525, -1.15164459, 0.59769231]}
            scale={0.37388334}
          />
          <mesh
            name="cs_solid_circle_squashed_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_circle_squashed_red.geometry}
            material={materials.cs_solid_red}
            position={[0.65008014, -1.15164459, 0.59769231]}
            scale={0.37388334}
          />
          <mesh
            name="cs_solid_eye_aim_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_eye_aim_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-1.96423006, -0.04209103, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_eye_aim_global"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_eye_aim_global.geometry}
            material={materials.cs_solid_green}
            position={[-1.84460855, -0.08672315, 0.05272278]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_eye_aim_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_eye_aim_red.geometry}
            material={materials.cs_solid_red}
            position={[-2.0817337, -0.04209103, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_eyebrow_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_eyebrow_blue.geometry}
            material={materials.cs_solid_blue}
            position={[2.67908549, -0.45959866, 0.04585921]}
            scale={0.25039205}
          />
          <mesh
            name="cs_solid_eyebrow_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_eyebrow_red.geometry}
            material={materials.cs_solid_red}
            position={[3.08115482, -0.45959866, 0.04585921]}
            scale={0.25039205}
          />
          <group
            name="cs_solid_fk_blue"
            position={[-3.71230245, -0.48257303, 0.05272264]}
            rotation={[-Math.PI / 2, 8e-8, Math.PI]}
            scale={0.06217284}
          >
            <mesh
              name="cs_solid_fk_blue_1"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_fk_blue_1.geometry}
              material={materials.cs_solid_blue}
            />
            <mesh
              name="cs_solid_fk_blue_2"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_fk_blue_2.geometry}
              material={materials.cs_solid_black}
            />
          </group>
          <group
            name="cs_solid_fk_red"
            position={[-2.86709619, -0.48257303, 0.05272264]}
            rotation={[-Math.PI / 2, 8e-8, Math.PI]}
            scale={0.06217284}
          >
            <mesh
              name="cs_solid_fk_blue_3"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_fk_blue_3.geometry}
              material={materials.cs_solid_red}
            />
            <mesh
              name="cs_solid_fk_blue_4"
              castShadow
              receiveShadow
              geometry={nodes.cs_solid_fk_blue_4.geometry}
              material={materials.cs_solid_black}
            />
          </group>
          <mesh
            name="cs_solid_plane_2"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_2.geometry}
            material={materials.cs_solid_green}
            position={[-1.17594552, -0.49842191, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.05419325}
          />
          <mesh
            name="cs_solid_plane_2_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_2_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-0.63278699, -0.49842191, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.05419325}
          />
          <mesh
            name="cs_solid_plane_2_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_2_red.geometry}
            material={materials.cs_solid_red}
            position={[-0.89142942, -0.49842191, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.05419325}
          />
          <mesh
            name="cs_solid_plane_3"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_3.geometry}
            material={materials.cs_solid_green}
            position={[0.97669858, -0.50796151, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_solid_plane_3_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_3_blue.geometry}
            material={materials.cs_solid_blue}
            position={[1.36158884, -0.50796151, 0.05272287]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_solid_plane_3_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_3_red.geometry}
            material={materials.cs_solid_red}
            position={[1.15310979, -0.50796151, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_solid_plane_5_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_5_blue.geometry}
            material={materials.cs_solid_blue}
            position={[1.60878074, -0.50755626, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_solid_plane_5_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_plane_5_red.geometry}
            material={materials.cs_solid_red}
            position={[1.52257931, -0.50755626, 0.05272281]}
            rotation={[0, -1.57053468, 0]}
            scale={0.0546387}
          />
          <mesh
            name="cs_solid_torus_04_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_torus_04_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-2.53287911, -0.47784677, 0.05272281]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_torus_04_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_torus_04_red.geometry}
            material={materials.cs_solid_red}
            position={[-2.60591125, -0.47784677, 0.05272281]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_torus_blue"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_torus_blue.geometry}
            material={materials.cs_solid_blue}
            position={[-3.84383535, -1.27873564, 0.05272262]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_torus_green"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_torus_green.geometry}
            material={materials.cs_solid_green}
            position={[-4.08653641, -1.27873564, 0.05272262]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_torus_red"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_torus_red.geometry}
            material={materials.cs_solid_red}
            position={[-3.6018877, -1.27873564, 0.05272262]}
            scale={0.09799999}
          />
          <mesh
            name="cs_solid_triangle"
            castShadow
            receiveShadow
            geometry={nodes.cs_solid_triangle.geometry}
            material={materials.cs_solid_green}
            position={[-0.27680397, -0.4742493, 0.05272262]}
            rotation={[Math.PI / 2, 5.1e-7, Math.PI / 2]}
            scale={0.22478342}
          />
          <group
            name="cs_sphere"
            position={[-0.84848762, 0.47203961, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0849554}
          />
          <group name="cs_sphere_dir1" position={[-0.54796708, 0.47704419, 0.0527228]} scale={0.08458168} />
          <group name="cs_sphere_dir2" position={[-0.74562907, 0.4726795, 0.05272281]} scale={0.09402781} />
          <group
            name="cs_spine"
            position={[0, 1.07468259, 0.00631832]}
            rotation={[Math.PI / 2, 0, 0.00660259]}
            scale={[0.05001056, 0.05000488, 0.05001057]}
          />
          <group
            name="cs_square"
            position={[-5.73731995, 0.82202458, 0.05272281]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
          <group name="cs_torus_01" position={[-1.25016046, 0.17408791, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_02" position={[-0.84026897, 0.16403165, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_03" position={[-0.25941986, 0.1563917, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_04" position={[-1.26462078, -0.15675002, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_04_rot" position={[-0.77237654, -0.15021133, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_04_rot2" position={[-0.68941462, -0.16026729, 0.05272281]} scale={0.09799999} />
          <group name="cs_torus_05" position={[-0.94332814, -0.16026717, 0.05272281]} scale={0.09799999} />
          <group
            name="cs_triangle"
            position={[-0.16557914, 0.9353233, 0.05272281]}
            rotation={[Math.PI / 2, 3e-7, Math.PI / 2]}
            scale={0.22478342}
          />
          <group
            name="cs_triangle_02"
            position={[0.21273163, 0.9479335, 0.05272281]}
            rotation={[-Math.PI, 1.39820305, -Math.PI]}
            scale={[0.17208013, 0.1720801, 0.17208013]}
          />
          <group
            name="cs_user_c_ankle_bendl"
            position={[0.10678934, 0.30705583, -0.49106562]}
            rotation={[-0.55988484, -0.01692524, 0.02699572]}
            scale={0.02370202}
          />
          <group name="cs_user_c_ankle_bendr" position={[0.07348736, 1.2562809, 0.83230591]} />
          <group
            name="cs_user_c_foot_01l"
            position={[0.10750575, 0.07253681, -0.56516427]}
            rotation={[-1.39236937, -2.1e-7, Math.PI]}
            scale={[0.10773238, 0.10773238, 0.10773239]}
          />
          <group name="cs_user_c_foot_01r" position={[0.07348736, 1.2562809, 0.83230591]} />
          <group
            name="cs_user_c_foot_ikl"
            position={[0.10750572, 0.00125441, -0.64960784]}
            rotation={[-Math.PI, -0.00033125, 1.57077508]}
            scale={0.0466325}
          />
          <group
            name="cs_user_c_headx"
            position={[-0.00143211, 25.00366402, 14.54277611]}
            rotation={[-2.40586216, 1.7e-7, 0.00006633]}
            scale={[1.48621702, 1.48621678, 1.48621726]}
          />
          <group
            name="cs_user_c_headx001"
            position={[0, 1.16969347, 0.69734389]}
            rotation={[Math.PI / 2, 3.5e-7, 0.00006769]}
            scale={0.03241916}
          />
          <group
            name="cs_user_c_jawbonex"
            position={[-0.00000292, 2.10079336, 1.50506246]}
            rotation={[-2.32247532, 0.00000211, 0.00000486]}
            scale={[0.43444344, 0.43444341, 0.43444338]}
          />
          <group
            name="cs_user_c_knee_bendl"
            position={[0.10273013, 0.43441468, -0.28787294]}
            rotation={[-1.32847931, 0.16143114, 2.95358011]}
            scale={[0.05823923, 0.05823924, 0.05823924]}
          />
          <group name="cs_user_c_knee_bendr" position={[-0.32306728, 0.73183674, 0.83230579]} />
          <group
            name="cs_user_c_leg_bend_02l001"
            position={[0.10511789, 0.3594977, -0.40739805]}
            rotation={[-0.55988484, -0.01692527, 0.02699572]}
            scale={0.02370199}
          />
          <group name="cs_user_c_leg_bend_02r" position={[-0.32306731, 0.73183674, 0.83230579]} />
          <group
            name="cs_user_c_leg_fkl"
            position={[0.18166551, 0.77593756, -0.77605057]}
            rotation={[-1.59408147, -0.00072172, 1.72289612]}
            scale={[0.51242882, 0.51242882, 0.51242858]}
          />
          <group name="cs_user_c_leg_fkr" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_leg_fk_dupli_001l"
            position={[0.20452127, 0.6637547, 0.9124586]}
            rotation={[-1.44081195, 0.03304306, -1.66127233]}
            scale={[0.43633336, 0.4363333, 0.43632939]}
          />
          <group name="cs_user_c_leg_fk_dupli_001r" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_neckx001"
            position={[0, 1.07244241, 0.63202149]}
            rotation={[2.16221837, 2.9e-7, -0.01346703]}
            scale={[0.23430561, 0.23429896, 0.23428564]}
          />
          <group
            name="cs_user_c_rootx"
            position={[0, 0.85075891, -0.14556107]}
            rotation={[3.07127477, 0, 0]}
            scale={[0.2124816, 0.21248157, 0.2124816]}
          />
          <group
            name="cs_user_c_root_masterx"
            position={[-0.00142163, 18.1061039, -8.13064957]}
            rotation={[-3.11171985, 7e-8, 0.00000438]}
            scale={[2.57509708, 2.57509708, 2.5750978]}
          />
          <group
            name="cs_user_c_root_masterx001"
            position={[0, 0.84371251, -0.24560204]}
            rotation={[3.07127619, 0, 0]}
            scale={[0.09025994, 0.09025992, 0.09025994]}
          />
          <group
            name="cs_user_c_spine_01x001"
            position={[0, 0.85780531, -0.0455201]}
            rotation={[-3.07421091, -1e-8, 0.00660299]}
            scale={[0.102493, 0.10248135, 0.10249301]}
          />
          <group
            name="cs_user_c_spine_01x002"
            position={[-0.0014216, 17.93518257, -2.4107666]}
            rotation={[3.12923578, 0, 0.0066041]}
            scale={[3.4891715, 3.48917127, 3.4891727]}
          />
          <group
            name="cs_user_c_spine_01_bendx"
            position={[0, 0.85013771, 0.06810261]}
            rotation={[0.06738089, 0, 0]}
            scale={[0.13905498, 0.1390392, 0.139055]}
          />
          <group
            name="cs_user_c_spine_02x001"
            position={[0, 0.84247011, 0.18172531]}
            rotation={[3.02519704, -0.00001266, -0.00000489]}
            scale={[0.0980643, 0.09805351, 0.09806392]}
          />
          <group
            name="cs_user_c_spine_02_bendx"
            position={[0, 0.85512078, 0.28995353]}
            rotation={[-0.11637295, 0, 0]}
            scale={[0.13304144, 0.13303182, 0.13303582]}
          />
          <group
            name="cs_user_c_spine_03x"
            position={[-0.00142156, 19.5293026, 8.53488541]}
            rotation={[2.38206703, 0, 0]}
            scale={[1.96096981, 1.96097028, 1.96097028]}
          />
          <group
            name="cs_user_c_spine_03x001"
            position={[0, 0.86777353, 0.39817196]}
            rotation={[2.5740779, 0, 0]}
            scale={[0.08993247, 0.08992586, 0.0899289]}
          />
          <group
            name="cs_user_c_thigh_bl"
            position={[0.16032468, 1.49501348, -0.37926787]}
            rotation={[-1.09594608, -0.21508028, 1.69113975]}
            scale={[0.29610315, 0.29610315, 0.29610306]}
          />
          <group name="cs_user_c_thigh_br" position={[0.20451595, 0.66364181, 0.91245824]} />
          <group
            name="cs_user_c_thigh_b_dupli_001l"
            position={[0.1166044, 1.51151741, 0.92319661]}
            rotation={[-1.55813199, -0.37870315, -1.65678396]}
            scale={[0.30420211, 0.30420217, 0.30420217]}
          />
          <group name="cs_user_c_thigh_b_dupli_001r" position={[0.20451595, 0.66364181, 0.91245824]} />
          <group
            name="cs_user_c_thigh_bend_02l"
            position={[0.11402176, 0.5017271, -0.27123499]}
            rotation={[-1.3284787, 0.16143135, -0.03970774]}
            scale={[0.03386001, 0.03386002, 0.03386001]}
          />
          <group name="cs_user_c_thigh_bend_02r" position={[-0.32306728, 0.73183674, 0.83230579]} />
          <group
            name="cs_user_c_thigh_fkl"
            position={[0.20677869, 1.05301809, -0.61733764]}
            rotation={[-1.05061377, 0.07848494, -0.04488034]}
            scale={[0.53383851, 0.53383851, 0.53383863]}
          />
          <group name="cs_user_c_thigh_fkr" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_thigh_fk_dupli_001l"
            position={[0.21925263, 1.00287259, 0.91675627]}
            rotation={[-1.55812347, 0.04340942, -0.00054964]}
            scale={[0.56576496, 0.56576496, 0.56576604]}
          />
          <group name="cs_user_c_thigh_fk_dupli_001r" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_thigh_ikl"
            position={[0.22352083, 1.23773849, -0.51152897]}
            rotation={[-1.05061289, 0.07848511, 1.70121866]}
            scale={[0.53383863, 0.53383851, 0.53383851]}
          />
          <group name="cs_user_c_thigh_ikr" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_thigh_ik_dupli_001l"
            position={[0.22907279, 1.22889209, 0.91961712]}
            rotation={[-1.55814004, 0.04341427, -1.65678375]}
            scale={[0.56582892, 0.56582868, 0.56582886]}
          />
          <group name="cs_user_c_thigh_ik_dupli_001r" position={[0.12725544, 2.22079229, 1.68336928]} />
          <group
            name="cs_user_c_waist_bendx"
            position={[0, 0.85780531, -0.0455201]}
            rotation={[-3.07421208, 0, 0]}
            scale={[0.13905515, 0.13905406, 0.13905515]}
          />
          <group name="cs_wire_eyebrow" position={[3.56637526, -0.45959866, 0.04585921]} scale={0.25039205} />
          <group
            name="cs_yeux"
            position={[-1.03944683, 0.4622612, 0.05272281]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.09799999}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/horse.glb')

export default Horse
