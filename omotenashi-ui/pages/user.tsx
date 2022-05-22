import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Omotenashi Panel</title>
      </Head>
      <main className='grid auto-cols-min h-screen'>
        <NavBar />
        <h1 className='text-3xl font-bold underline text-red-600'>
          User
        </h1>
      </main>
    </div>
  )
}

export default Home
