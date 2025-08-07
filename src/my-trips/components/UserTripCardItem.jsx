
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
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
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='hover:scale-105 transition-all'>
        <img src={photoUrl ? photoUrl : '/placeholder.jpg'} alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget. </h2>
        </div>
      </div>

    </Link >
  )
}

export default UserTripCardItem