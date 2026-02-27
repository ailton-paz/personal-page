import Image from 'next/image';

import ProfileBox from './components/main/Profilebox'
import StudentReview from '@/app/components/main/StudentReview'
import profileImg from '../app/img/profile-picture.png'
import WorkList from '@/app/components/main/WorkList'

export default function Home() {
  return (
  
    <div className="p-8 h-full flex flex-col gap-8 flex-wrap">
      <div className='flex flex-col md:flex-row gap-4 md:h[400px]'>
        
          <ProfileBox />
          <WorkList />
        
      </div>
        <div className='overflow-x-auto w-full'>
        <StudentReview />
        </div>
    </div>
        
  )
}