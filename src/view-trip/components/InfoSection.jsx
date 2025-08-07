import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'


function InfoSection({ trip }) {

    const [photoUrl, setPhotoUrl] = useState("");

  async function searchPhoto(query) {

    const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    if (!query) {
      setPhotoUrl("");
      return;
    }
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${accessKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      setPhotoUrl(data.results[0].urls.small);
      console.log(photoUrl);
    } else {
      setPhotoUrl("");
    }
  }
    useEffect(() => {
        searchPhoto(trip?.userSelection?.location?.label);
    }, [trip?.userSelection?.location?.label]);
    
    return (
        <div>
            <img src={photoUrl?photoUrl:'/placeholder.jpg'} alt="img" className='h-[340px] w-full object-cover rounded-xl' />
            <div>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md '>📅{trip.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰{trip.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>👥No. of traveler/s: {trip.userSelection?.traveler}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection