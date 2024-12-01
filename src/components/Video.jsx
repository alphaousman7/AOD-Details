import React from 'react'
import ReactPlayer from 'react-player'

const msstermi = () => {
  alert('video terminé')
}

export default function Video() {
  const you='https://www.youtube.com/watch?v=ysz5S6PUM-U'
  return (
    <div className='  center p-5 w-full h-screen bg-gradient-to-b'>
    <div name='video'  className=' text-black flex justify-center items-center pb-8 py-4 col-span-2 mt-2 text-5xl font-bold underline '>
      <h1 >J'ai pas de videos de programmation à mon nom </h1>
    </div>
        <ReactPlayer
                 controls
                 playing
                 width="400px"
                 height="160px"
                 onEnded={msstermi}
        url={you} className='flex justify-center items-center' />
    </div>
  )
}
