import React from 'react';
import Image from 'next/image';


function Footer() {
  return (
    <div className="text-center grid grid-cols-1 md:grid-cols-5 gap-y-10 px-32 py-14 bg-gray-100">

      <div className="space-y-4 text-xs text-gray-800 text-left">
        <h5 className="font-bold text-2xl">Download AirBnB</h5>
        <div className="cursor-pointer">
          <Image
            src="https://www.seekpng.com/png/detail/34-349265_app-store-google-play-svg.png"
            height={120}
            width={165}
            objectFit="cover" />
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-800 text-left">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>News Room</p>
        <p>Airbnb 2021</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        <p>HotelTonight</p>
        <p>Airbnb for Work</p>
        <p>Made possible by Hosts</p>
        <p>Careers</p>
        <p>Founders' Letter</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 text-left">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
        <p>Gift cards</p>
        <p>Airbnb.org</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 text-left">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Resource Center</p>
        <p>Community Center</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 text-left">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood Support</p>
        <p>Trust & Safety</p>
      </div>

    </div>
  )
}

export default Footer
