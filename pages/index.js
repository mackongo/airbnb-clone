import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

export default function Home({ exploreData, cardsData }) {

  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main>

        <section className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">

          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) =>
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            )}

          </div>

        </section>

        <section className="pt-6 max-w-7xl mx-auto sm:px-16">

          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(item =>
              <MediumCard
                key={item.img}
                img={item.img}
                title={item.tite} />
            )}
          </div>

          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            buttonText="Get Inspired" />

        </section>

        <Footer />
        <div className="text-center bg-black h-16">
          <Copyright />
        </div>

      </main>

    </div >
  )
}

// tells Next JS to do server rendering
export async function getStaticProps(context) {

  const res = await fetch(`https://links.papareact.com/pyp`)
  const exploreData = await res.json()

  if (!exploreData) {
    return {
      notFound: true,
    }
  }

  const res2 = await fetch(`https://links.papareact.com/zp1`)
  const cardsData = await res2.json()

  if (!cardsData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { exploreData, cardsData }, // will be passed to the page component as props
  }
}