import Head from 'next/head'
import List from '../components/List'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <List />
    </div>
  )
}

export default Home
