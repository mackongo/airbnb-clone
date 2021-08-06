import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon
} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';

import { useRouter } from 'next/router';

function Header({ placeholder }) {

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const resetInput = () => {
    setSearchInput("")
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  }

  return (


    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

      {/* left section */}

      <div
        className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          onClick={() => router.push('/')}
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadoow-sm">

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "start your search"} />

        <SearchIcon className="hidden h-8 md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

      </div>

      {/* right section */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">

        <p className="hidden md:inline">Become a Host</p>

        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>

      </div>

      {searchInput &&
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl text-gray-500 flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5 text-gray-500" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) =>
                setNoOfGuests(e.target.value)
              }
            />

          </div>

          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500">
              Cancel
            </button>

            <button
              onClick={search}
              className="flex-grow text-red-500">
              Search</button>
          </div>
        </div>
      }

    </header>
  )
}

export default Header
