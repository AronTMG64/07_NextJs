import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [timer, setTimer] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className=' text-5xl'>{timer}</h1>
    </main>
  )
}
