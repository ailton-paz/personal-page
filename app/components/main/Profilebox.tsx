import Image from 'next/image';
import profileImg from '../../img/profile-picture.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ProfileBox() {
    return (
        <div className="flex h-auto w-full md:h-full md:w-[80%]
        p-4 gap-x-4 shadow-[4px_4px_0px] border-2 bg-orange-300"> 
        {/*A div principal do componente, com estilos para layout, aparência e tamanho*/}

            {/*Div da imagem*/}
            <div className='border-3 w-70 aspect-[3/4] relative'>
                <Image 
                src={profileImg}
                fill
                className='object-cover object-center '
                alt="Foto de perfil" />
            </div>

            {/*Div das informações complementares*/}
            <div className='flex flex-col gap-y-3'>
                
                {/*Primeira div, nome e ícones*/}
                <div>
                <div className='flex justify-between items-center h-10md:gap-y-10'>
                    
                    <div>
                    <h1 className='font-bold text-[22px] md:text-[30px] leading-none md:leading-13'>Ailton Paz</h1>
                    <p className='text-[12px] md:text-[15px] leading-none'>ailton6paz@gmail.com</p>
                    </div>
                   
                    {/*Div dos ícones de github,linkedin*/}
                    <div className='flex gap-2 h-[30px]'> 
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
    
                </div>


                {/*Segunda div, quadradinhos*/}
                    <div className='flex justify-between w-full h-[60px] md:h-30 gap-3 text-sm'>

                    <div className='border-2 p-1 flex flex-col justify-center md:flex-grow bg-[#ffd967]'>
                        <p className='font-extrabold text-[12px] md:text-[25px] leading-none'>10+</p>
                        <p className='leading-none md:text-[16px] text-[8px]'>experience</p>
                    </div>

                    <div className='border-2 p-1 flex flex-col justify-center md:flex-grow bg-[#FFD867]'>
                        <p className='font-extrabold text-[12px] md:text-[25px]  leading-none'>#1</p>
                        <p className='leading-none text-[10px] md:text-[16px]'>on platform</p>
                    </div>

                    <div className='border-2 p-1 flex flex-col justify-center md:flex-grow bg-[#FFD867]'>
                        <p className='font-extrabold text-[12px] md:text-[25px]  leading-none'>5 ya</p>
                        <p className='leading-none text-[10px] md:text-[16px]'>of teaching</p>
                    </div>

                    <div className='border-2 p-1 flex flex-col justify-center md:flex-grow bg-[#FFD867]'>
                        <p className='font-extrabold text-[12px] md:text-[25px]  leading-none'>12</p>
                        <p className='leading-none text-[10px] md:text-[16px]'>courses</p>
                    </div>

                </div>

                {/*Terceira div, texto*/}
                <div>
                    <p className='md:text-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum, dolorum saepe autem unde suscipit commodi quos delectus nulla dolor!</p>
                </div>

            </div>

            
        
        </div>

    )
}
