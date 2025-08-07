import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { GetPlacePhoto } from '@/service/GlobalApi';


function PlaceCardItem({place}) {

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
        searchPhoto(place?.place);
    }, [place?.place]);


 
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' +place?.place} target='_blank'>
    <div className='shadow-sm border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'} alt="" className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
            <h2 className='font-bold text-lg'>{place.place}</h2>
            <p className='text-sm text-gray-500'>{place.details}</p>
            {/* <h2>place.timetoTravel</h2> */}
            <h2 className='text-xs font-medium mt-2 mb-2'>🏷️Ticket: {place.ticket_pricing}</h2>
            {/* <Button size="sm"><FaMapLocationDot /></Button> */}
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem