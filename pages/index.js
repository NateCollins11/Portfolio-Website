import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { Img } from '../components/elements/Img';
import { WIP } from '../components/elements/WIP';

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Nate Collins - Web Development</title>
      </Head>



      <div className='w-full flex justify-center '>
        <div className=' flex flex-col px-20 justify-center items-center '>
          <div className='mb-16 mt-8'>

            <WIP/>

          </div>
          <span className=' text-6xl font-light tracking-[.3em] text-purplegray-1 mb-24'>Nathaniel Collins</span>
          <div className='w-full flex flex-row justify-start items-start p-2 bg-[#e8dddc] shadow-xl shadow-gray-5/30 rounded-xl '>

            {/* Profile */}
            <div className='p-4 bg-[#391c1d] rounded-md shadow-sm shadow-gray-1 w-80 h-80'>
              <Img src='/prof.png' className=' rounded-md shadow-sm shadow-gray-2 '/>
            </div>

            {/* Text */}
            <div className='flex flex-col ml-4 text-purplegray-1 tracking-wide text-xl p-8' >
              <div className='text-2xl'>Hello!</div>
              <div className='max-w-[280px] mt-6'>I'm Nate, software engineer, web developer, app builder and game maker. I take enourmous joy in finding elegant solutions to complicated conundrums. </div>
              <div></div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
