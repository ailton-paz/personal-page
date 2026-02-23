import MainBox from "./components/main/mainbox"
import Image from 'next/image';
import profileImg from '../app/img/profile-picture.png'

export default function Home() {
  return (
    <div className="main flex h-screen items-center, justify-center">
      <div className="flex w-full">
      
            <div className="bg-orange-300 m-20 border-2 p-2 w-[70%] h-fit flex items-center justify-start shadow-[3px_3px_0px]">

            <div className='m-3 border-2 w-30 h-40 overflow-hidden relative'>
                <Image 
                src={profileImg}
                fill
                className='object-cover object-bottom-left '
                alt="Foto de perfil" />
            </div>

            <div className="border-2 w-full">
                <div className='flex justify-between w-[100%]'>
                    <h1 className='font-bold'>Ailton Paz</h1>
                    <p>ailton6paz@gmail.com</p>
                </div>
                <div>
                  <h1>&</h1>
                </div>
                <div>
                    
                </div>
            </div>
        
        </div>
      </div>
      
    </div>
  )
}