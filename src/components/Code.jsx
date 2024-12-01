import React from 'react'
import {FaGithubSquare, FaLinkedin,} from "react-icons/fa"
import {MdContactMail} from "react-icons/md"
import {AiOutlineWhatsApp,AiOutlineCodeSandbox} from "react-icons/ai"




export default function Codee() {
  return (<div name='source'>
    <div className=' from-orange-400  text-black font-bold '>
        <div className=" mg-2 m-2 flex flex-col max-w-screen-lg p-2 mx-auto  justify-center w-full h-full">
         <div className='flex flex-auto'>
          <p className="text-4xl  font-bold flex flex-col"><AiOutlineCodeSandbox size={200} className="  to-black"/></p>
            <p className="text-xl mt-2 container"></p><hr/><br/>
        <h1 className="mg-2 m-2 flex flex-col max-w-screen-lg p-2 mx-auto  justify-center w-full h-full text-xl">Mes codes<br/><hr/><br/>
        <a href='https://github.com/alphaousman7'><span className=' text-center'>GhitHub</span> <FaGithubSquare size={100}/></a> <br/></h1>
        <h2 className='texte-center'>Pour regarder mes codes sur mes differents projet aller sur ma page de garde des codes.<br/>Vous allez sur mon compte github ou ramenez Votre curseur sur la partie gauche et cliquez sur ghit <br/></h2>
        <h1> <br/></h1>
</div>
   <h1><br/><hr/><br/></h1><h1 className=' text-center text-5xl'>Mes contacts pour en cas de besoin<br/><hr/></h1>
   <div className='flex flex-col-row  '>
            <h6 className='flex mx-10'> < a href='https://www.linkedin.com/in/alphaousmane-diallo-5ab82b262'>linkedIn<FaLinkedin size={80}/></a><br/></h6>
            <h6 className='flex mx-10'><a href='mailto:alphaousmaneousmane@gmail.com'><span>Mail</span> <MdContactMail size={80}/></a><br/> </h6>
            <h6 className='flex mx-10'> <a href='https://call.whatsapp.com/voice/6BltD24KmGj7ymIleODD5N'><span>Watchapp</span> <AiOutlineWhatsApp size={80}/></a> <br/></h6>
    </div>
    </div>
    </div>
    </div>
  )
}
