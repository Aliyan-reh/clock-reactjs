import Image from 'next/image'
import { Clock } from './clock'


export default function Home() {
  const todayDate = new Date()
  return (
 <main className='flex justify-center items-center h-screen'>
  <Clock time={todayDate.getTime()}/> PM  
 </main>
  )
}
