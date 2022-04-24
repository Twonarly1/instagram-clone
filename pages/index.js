import Head from 'next/head'
import Header from '../components/Header.js'
import Feed from '../components/Feed.js'
import Modal from '../components/Modal.js'

const Home = () => {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>two.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
