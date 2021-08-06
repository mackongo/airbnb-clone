import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {

  //console.log(searchResults);

  const router = useRouter();
  console.log(router.query);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;


  return (

    <div className="">

      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className="flex">

        <section className="flex-grow pt-14 px-6">

          <p className="text-xs text-gray-400 ml-8 mt-8">300+ stays  - {range} for {noOfGuests} number of guests</p>

          <h1 className="text-3xl mt-2 mb-6 ml-8">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 ml-8 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">

            {searchResults.map(({ img, location, title, description, star, price, total, long, lat }) => (
              <InfoCard
                key={img}
                img={img}
                title={title}
                location={location}
                description={description}
                star={star}
                price={price}
                total={total}
                long={long}
                lat={lat}
              />
            ))}
          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {

  const res = await fetch("https://links.papareact.com/isz")
  const searchResults = await res.json()

  if (!searchResults) {
    return {
      notFound: true,
    }
  }

  return {
    props: { searchResults }, // will be passed to the page component as props
  }
}
