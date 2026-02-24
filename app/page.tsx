import Profilebox from './components/main/Profilebox'
import Image from 'next/image';
import profileImg from '../app/img/profile-picture.png'

export default function Home() {
  return (
    <div className="main flex h-screen items-center, justify-center flex-wrap">
      <div className="flex w-full items-center justify-center">

        <Profilebox />
        <h1>Olá, mundo</h1>
       
      
    
        
      </div>
      
    </div>
  )
}