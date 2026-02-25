import Image from 'next/image';

import ProfileBox from './components/main/Profilebox'
import StudentReview from '@/app/components/main/StudentReview'
import profileImg from '../app/img/profile-picture.png'
import WorkList from '@/app/components/main/WorkList'

export default function Home() {
  return (
  
    <div>
      <div>
        <ProfileBox />
        <WorkList />
      </div>
        <div className='overflow-x-auto'>
        <StudentReview />
        </div>
    </div>
        
  )
}