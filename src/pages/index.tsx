import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import moonphase from '../../public/images/moonphase.png';
import moonsun from '../../public/images/moon-sun.png';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <div id='homeSection' className='p-5 w-screen h-[500px] grid grid-cols-2'>
        <article className='h-5/6 text-center flex flex-col m-auto items-center justify-around col-span-2 md:col-span-1 md:max-w-[400px]'>
          <h1 className='text-xl font-extrabold'>DEEPEN. EVOLVE. GROW.</h1>
          <p className='max-w-[300px]'>self discovery + mind-body healing for the heart centered woman</p>
          <div className='h-[30px] border-l-[1px] border-black'></div>
          <button className='border-[1px] border-black py-2 px-5'>BOOK A CALL</button>
          <Image src={moonphase} alt='moonphases' className='max-w-screen w-[250px]' />
        </article>
      </div>
      <div className='min-h-[400px] h-auto border-t-[2px] border-linen bg-white p-5 text-center flex flex-col items-center justify-around'>
        <h1 className='text-xl'>How do coaching and astrology blend?</h1>
        <Image src={moonsun} alt='moon and sun decorative image' className='max-w-screen w-[150px]' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div id='homeAboutSection' className='min-h-[420px] flex flex-col justify-center md:grid grid-cols-2'>
        <div className='bg-white bg-opacity-60 mt-4 md:mt-0 md:bg-transparent rounded-sm p-4 h-auto flex flex-col justify-around'>
          <h1 className='self-center text-center text-3xl font-semibold m-2'>Aligning Mind, Stars, &amp; Spirit</h1>
        </div>
        <div className='bg-white bg-opacity-90 mb-4 md:m-2 rounded-sm p-4 h-auto flex flex-col items-center justify-around'>
          <p className='m-1 max-w-[800px]'>Step into a holistic journey of self-discovery with Katie, where life coaching, astrology, and the serene wisdom of yoga converge. As a compassionate guide, Katie seamlessly blends her expertise as a life coach with celestial insights, providing a unique and transformative experience. Rooted in her yogic practice, Katie fosters mindfulness and presence in every interaction. Her nurturing approach gently empowers individuals to navigate life&apos;s complexities, unravel their true potential</p>
          <Link href='/about' className='m-1 border-[1px] border-black py-2 px-5'>
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
