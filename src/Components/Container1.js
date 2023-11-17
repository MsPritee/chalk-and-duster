import React from 'react';
import './Container1.css';
import logo1 from './Images/yt-logo.png'
import logo2 from './Images/coding.png'
import logo3 from './Images/course-logo.png'


export default function Container1() {
  return (
    <div className='card-container flex mx-14 my-6 '>
      <div className='card flex-1  '>
        <div className='inner-card my-8'>
          <div className='logo'>
            <img className='logo-img' src={logo1} alt='Youtube' />
          </div>
          <div className='contain'>
            <h3>Effective Learning Videos</h3>
          </div>
          <div>
            <p><span className='font-bold text-slate-600'>140,097</span>  Views on <span className='font-bold text-slate-600'>YouTube</span>.</p>
          </div>
          <div className='btn-box'>
            <button className='yt-btn btn'>
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className='card flex-1'>
        <div className='inner-card my-8'>
          <div className='logo '>
            <img className='logo-img' src={logo2} alt='Learning' />
          </div>
          <div className='contain'>
            <h3>Free Learning Basic Knowledge</h3>
          </div>

          <div className='mx-3'>
            <p>Learn the basics of market with us, Free learning Provides all basics about the Market.</p>
          </div>

          <div className='btn-box'>
            <button className='btn blog-btn'>
              Read All Blogs
            </button>
          </div>
        </div>
      </div>

      <div className='card flex-1 '>
        <div className='inner-card my-8'>
          <div className='logo'>
            <img className='logo-img' src={logo3} alt='Courses' />
          </div>
          <div className='contain'>
            <h3>Online Courses</h3>
          </div>
          <div className='mx-3'>
            <p>Learn the basics of market with us, Free learning Provides all basics about the Market.</p>
          </div>
          <div className='btn-box'>
            <button className='btn course-btn'>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
