import Image from "next/image"
import { RiMenuSearchFill } from "react-icons/ri"

export default function WorkList() {
    return (
        <div className="border-2 bg-white shadow-[4px_4px_0px]">

            <div className='flex p-2 gap-x-2 border-b-2'>
                <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-black">
                    <RiMenuSearchFill size={20} color='#000' />
                </div>
                <div className="text-sm">
                    <p className="font-bold">Intérprete de Libras</p>
                    <p className="text-[12px]">IFCE - Campus Canindé</p>
                    <p className="text-[12px]">Junho 2025 - Atual</p>
                </div>
            </div>

            <div className='flex p-2 gap-x-2 border-b-2'>
                <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-black">
                    <RiMenuSearchFill size={20} color='#000' />
                </div>
                <div className="text-sm">
                    <p className="font-bold">Intérprete de Libras</p>
                    <p className="text-[12px]">IFCE - Campus Canindé</p>
                    <p className="text-[12px]">Junho 2025 - Atual</p>
                </div>
            </div>

            <div className='flex p-2 gap-x-2 border-b-2'>
                <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-black">
                    <RiMenuSearchFill size={20} color='#000' />
                </div>
                <div className="text-sm">
                    <p className="font-bold">Intérprete de Libras</p>
                    <p className="text-[12px]">IFCE - Campus Canindé</p>
                    <p className="text-[12px]">Junho 2025 - Atual</p>
                </div>
            </div>
        </div>
    )
}