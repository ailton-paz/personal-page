import Image from 'next/image';

import ProfileBox from './components/main/Profilebox'
import StudentReview from '@/app/components/main/StudentReview'
import profileImg from '../app/img/profile-picture.png'
import WorkList from '@/app/components/main/WorkList'

export default function Home() {
  return (
  
    <div className="p-2 h-full flex flex-col gap-5 border-2 flex-wrap">
      <div className='flex flex-col justify-between md:flex-row md:h-[400px] gap-5'>
        <div className=''>
          <ProfileBox />
        </div>

        <div className=''>
          <WorkList />
        </div>
      </div>
        <div className='overflow-x-auto w-full'>
        <StudentReview />
        </div>
    </div>
        
  )
}