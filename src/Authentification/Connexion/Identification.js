import React from 'react'
import './connexion.css'
export default function Connexion() {//composant d'identification pour se connecter au site
  return (//par defaut cest index.js que l'apli execu export donne la possibilité au otre de lutiliser
    <div className=''>
      
     <div className='centrondanscss '>
            <form action='' method='post' className='form-control'>
                    <h1 className='titre italic ... underline underline-offset-8 text-4xl text-center font-signature'>Connexion</h1>
                    <div className='form-group '>
                        <label htmlFor=''><h6> E-mail  :</h6></label>
                        <input type='mail'  className='form-control '/>
                    </div>

                    <div className='form-group '>
                    <label htmlFor='' className=''><h6>Mot de passe :</h6></label>
                        <input className='form-control' type="password" placeholder='Password'/>
                    </div>

                    <div className='desc'>
                        <button className=' btn btn-outline-success'><h4>Validation</h4></button>
                    </div>
                    
            </form>
      </div>
      
    </div>
  )//on a fai son css dans son fichier et on l'import ici meme
}//comme je veu le centrer je le met dans un div et je part dans css
