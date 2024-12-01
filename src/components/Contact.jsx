import React from 'react'
import {FcVoicePresentation} from "react-icons/fc"
export default function Contact() {
  return (//un div aussi qui aura le composant formulaire
    <div name="contact" className='p-4 w-full h-screen bg-gradient-to-b from-black to-black black  '>

        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full' > 
            <div className="pb-8 py-4 ">
                <p className=' flex col-span-2 mt-2 text-5xl text-white font-bold underline '>Contact<FcVoicePresentation/> <FcVoicePresentation/> <FcVoicePresentation/></p>
                <p className='py-3 text-white font-bold '> Vous pouvez saisir votre commentaire ici concernant vos avis merci et bon suite a vous </p>
            </div>

            <div className="flex justify-center items-center ">
                <form action='https://getform.io/f/1f9c369e-5388-43de-b61a-6fa4818f9166' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input
              type="text"
              name="name"
              placeholder="Entrer votre nom "
              className="p-1 bg-lime-100 border-2 rounded-md text-black font-bold focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Entrer votre mail"
              className="my-2 p-1 bg-lime-100 border-2 rounded-md   text-black font-bold  focus:outline-none"
            />
              <textarea
              name="message"
              placeholder="Entrer votre message ici"
              rows="10"
              className=" bg-lime-50 border-2 rounded-md  text-black font-bold  focus:outline-none"
            ></textarea>

            <button className="text-white font-bold bg-gradient-to-b from-amber-800 to-lime-700 px-3 py-1 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Parlons ici<FcVoicePresentation size={30} className='hover:rotate-90 duration-300 ml-4 bg-black fp'/>
            </button>
                </form>
            </div>
        </div>
    </div>
  )
}
