import Image from 'next/image';
import profileImg from '../../img/profile-picture.png'


export default function MainBox() {
    return (
        <div className="bg-orange-300 m-20 border-2 p-2 w-fit h-fit flex items-center justify-center shadow-[3px_3px_0px]">

            <div className='m-3 border-2 w-30 h-40 overflow-hidden relative '>
                <Image 
                src={profileImg}
                fill
                className='object-cover object-bottom-left '
                alt="Foto de perfil" />
            </div>

            <div>
                <div className='grid'>
                    <h1 className='font-bold'>Ailton Paz</h1>
                    <p>ailton6paz@gmail.com</p>
                </div>
                <div>
                    
                </div>
            </div>
        
        </div>

    )
}