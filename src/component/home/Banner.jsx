import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="shadow-md">
        <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
          >
         <img src="/image/Banner.jpg" className='w-full h-screen' alt="" />
         <img src="/image/Banner2.jpg" className='w-full h-screen' alt="" />
         <img src="/image/Bnner4.jpg" className='w-full h-screen' alt="" />
         <img src="/image/Bnner5.jpg" className='w-full h-screen' alt="" />
        </Carousel>
         <div className='absolute top-10  mt-3 md:mt-7 h-screen md:h-auto md:pt-80 md:pb-10 text-white bg-banner-color'>
         <div className='mx-5 py-7 mt-44 md:mt-0 text-center'>
         <div className='arrow'>
           <span></span>
           <span></span>
           <span></span>
         </div>
         <h1 className='text-2xl md:text-5xl mb-5 font-semibold'>Crimson Travel represents the Travel & Tourism sector globally</h1>
         <p className='md:px-36 md:my-10'>As a non-profit membership-based organisation, our members and partners are the core of our organisation and include over 200 CEOs, Chairpersons, and Presidents of the world’s leading Travel & Tourism companies from all geographies and industries.</p>
         <div className='mt-10 md:flex gap-5 justify-center'>
         <Link to="/login">
         <button className='border-2 border-white px-7 py-2 hover:bg-primary hover:border-primary rounded-full mb-5 md:mb-0'>
           login
         </button>
         </Link>
         <form action="">
         <input type="text" className='px-3 py-2 outline-none rounded-l-full text-black' placeholder='find you service' />
         <button className='px-5 py-2 rounded-r-full bg-primary'>Find</button>
         </form>
         </div>
         </div>
         </div>
        </div>
    );
};

export default Banner;