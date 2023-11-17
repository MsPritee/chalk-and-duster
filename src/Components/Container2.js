import React from 'react';
import './Container2.css';
import logo1 from './Images/yt-logo.png'
import logo2 from './Images/coding.png'
import logo3 from './Images/course-logo.png'


export default function Container2() {
    return (
        <>
            <div className='yt-container mt-28 mb-12'>
                <h2 className='text-4xl text-violet-800 text-center font-extrabold  mb-10 '>
                    Learning
                </h2>
                <div className='yt-card-container flex mx-14 mb-6 '>
                    <div className='yt-card flex-1  '>
                        <div className='yt-logo'>
                            <a href='https://www.youtube.com/watch?v=Kv-tft2DBss&list=PLHD6Gx28FlkjaP-gBuKpYoNHzre1Z4lEV&pp=gAQBiAQB' >
                                <div>
                                    <img className='complex-img' loading='lazy' decoding='async' src='https://i.ytimg.com/vi/2pgCqFN-DRI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQDb0VSM94mJoFKwf9D4q39cJlCQ' />
</div>
                            </a>
                        </div>
                      
                        <div className='yt-btn-box'>
                            <button className='ytbtn '>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className='yt-card flex-1  '>
                        <div className='yt-logo'>
                            <a href='https://www.youtube.com/watch?v=JPUrVJfjwXI&list=PLHD6Gx28FlkgN6ug3NwW8YbIL-qUHV5Dw&pp=gAQBiAQB' >
                                <div>
                                    <img className='group-img' loading='lazy' decoding='async' src='https://i.ytimg.com/vi/NJPWywq24yA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdNVr9Ra0uCYF7KxygPKNIPD8-Zw' />
                                </div>
                            </a>
                        </div>

                        <div className='yt-btn-box'>
                            <button className='ytbtn '>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className='yt-card flex-1  '>
                        <div className='yt-logo'>
                            <a href='https://www.youtube.com/watch?v=ERpSyf0PoPo&list=PLHD6Gx28FlkjrNIJxaJzcPZDLJdlvlnvJ&pp=gAQBiAQB' >
                                <div>
                                    <img className='jee-img' loading='lazy' decoding='async' src='https://i.ytimg.com/vi/ERpSyf0PoPo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAYx-gsaOFnGoWlaQzCtn5CzkxkRw' />
                                </div>
                            </a>
                        </div>

                        <div className='yt-btn-box'>
                            <button className='ytbtn '>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
