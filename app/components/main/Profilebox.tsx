import Image from 'next/image';
import profileImg from '../../img/profile-picture.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ProfileBox() {
    return (
        <div className="flex bg-orange-300 border-2 w-[45%]
        h-auto p-4 justify-around shadow-[4px_4px_0px]"> 
        {/*A div principal do componente, com estilos para layout, aparência e tamanho*/}

            {/*Div da imagem*/}
            <div className='border-3 w-40 aspect-[3/4] relative'>
                <Image 
                src={profileImg}
                fill
                className='object-cover object-bottom '
                alt="Foto de perfil" />
            </div>

            {/*Div das informações complementares*/}
            <div className='w-[65%] flex flex-col gap-y-3'>
                
                {/*Primeira div, nome e ícones*/}
                <div>
                <div className='flex justify-between h-10'>
                    <h1 className='font-bold text-[clamp(1.7rem,2.5vw,1.25rem)]'>Ailton Paz</h1>
                    
                   
                    {/*Div dos ícones de github,linkedin*/}
                    <div className='flex gap-2 h-full'> 
                        <a 
                        href="https://github.com/ailton-paz"
                        target='blank'
                        className='flex items-center justify-center w-full aspect-square bg-white border-3 border-black hover:bg-gray-100 transition-colors"'>
                        <FaGithub size={20} color='#000' />
                        </a>

                        <a 
                        href="https://www.linkedin.com/in/ailton-paz/"
                        target='blank'
                        className='flex items-center justify-center w-full aspect-square bg-white border-3 border-black hover:bg-gray-100 transition-colors"'>
                        <FaLinkedin size={20} color='#000' />
                        </a>
                    </div>
                </div>
                <p>ailton6paz@gmail.com</p>
                </div>

                {/*Segunda div, quadradinhos*/}
                <div className='flex flex-wrap justify-around w-full gap-2 text-sm'>

                    <div className='border-2 p-2 flex flex-col justify-center gap-y-1 bg-[#ffd967]'>
                        <p className='font-extrabold text-lg leading-none'>10+</p>
                        <p className='leading-none'>experience</p>
                    </div>

                    <div className='border-2 p-2 flex flex-col justify-center gap-y-1 bg-[#FFD867]'>
                        <p className='font-extrabold text-lg leading-none'>#1</p>
                        <p className='leading-none'>on platform</p>
                    </div>

                    <div className='border-2 p-2 flex flex-col justify-center gap-y-1 bg-[#FFD867]'>
                        <p className='font-extrabold text-lg leading-none'>5 ya</p>
                        <p className='leading-none'>of teaching</p>
                    </div>

                    <div className='border-2 p-2 flex flex-col justify-center gap-y-1 bg-[#FFD867]'>
                        <p className='font-extrabold text-lg leading-none'>12</p>
                        <p className='leading-none'>courses</p>
                    </div>

                </div>

                {/*Terceira div, texto*/}
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam suscipit et, illo modi reiciendis.</p>
                </div>

            </div>

            
        
        </div>

    )
}
