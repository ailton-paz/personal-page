import ProfileBox from './components/main/ProfileBox'
import Image from 'next/image';
import profileImg from '../app/img/profile-picture.png'

export default function Home() {
  return (
    <div className="main flex h-screen items-center, justify-center flex-wrap">
      <div className="flex w-full items-center justify-center">


        <ProfileBox />
       
        
      </div>
      
    </div>
  )
}