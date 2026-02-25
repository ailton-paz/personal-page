import Image from 'next/image';

import ProfileBox from './components/main/Profilebox'
import StudentReview from '@/app/components/main/StudentReview'
import profileImg from '../app/img/profile-picture.png'
import WorkList from '@/app/components/main/WorkList'

export default function Home() {
  return (
  
    <div className="p-5 w-full h-full flex flex-col gap-5">
      <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5 '>
        <ProfileBox />
        <WorkList />
      </div>
        <div className='overflow-x-auto'>
        <StudentReview />
        </div>
    </div>
        
  )
}