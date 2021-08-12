import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';

export default function Home({exploreData}) {
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
            {exploreData?.map(({distance, img, location}) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </section>
        </main>
    </div>
  );
}
// USER --> PRE FETCH INFORMATION FROM SERVER --> REACT APP
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    }
  }
}
