/* eslint-disable react/no-unknown-property */

import './App.css'
import { Canvas } from '@react-three/fiber'
import { Book } from './model/book'
function App() {

  return (
    <main className='h-screen w-full'>
     <Canvas
     camera={{near: 0.1, far: 1000}}>
     <directionalLight intensity={10} position={[20, 0, 10]}/>
     <ambientLight intensity={0.5}/>
     <hemisphereLight intensity={20}/>
      
      <Book rotation={[20.5, -0.2, 0]}/>
     </Canvas>
    </main>
  )
}

export default App
