import React from 'react'
import Moodyplayer from './features/Moodyplayer'
import { FaceDetection } from 'face-api.js'
import FacialExpression from './components/FacialExpression'

const Home = ({songs , setSongs}) => {
  return (
    <>
      <div className='p-15 flex gap-30 justify-center '>
           <div className='border h-110 w-200 rounded-md'>
              <Moodyplayer songs={songs}/>
           </div>
           <div className='border h-110 w-120 rounded-md'>
              <FacialExpression setSongs={setSongs}/>
           </div>
      </div>
    </>
  )
}

export default Home
