import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        < Banner />
        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className="pt-6">
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            {/* pull data from server - API endpoint */}
          </section>
        </main>
    </div>
  )
}
