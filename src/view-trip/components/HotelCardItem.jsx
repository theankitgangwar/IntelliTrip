
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {
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
            searchPhoto(hotel?.name + " hotel" + " " + hotel?.address);
        }, [hotel?.name]);

    
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + "," + hotel?.address} target='_blank'>

            <div className='hover:scale-110 transition-all cursor-pointer mt-5 mb-8'>
                <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover' />
                <div className='my-2'>
                    <h2 className='font-medium'>{hotel?.name}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.address}</h2>
                    <h2 className='text-sm'>💰{hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>

                </div>
            </div></Link>
    )
}

export default HotelCardItem