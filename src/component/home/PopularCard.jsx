import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const PopularCard = ({name, country, img}) => {
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
        <Link to={`/serviceDetails/${name}`}>
        <div className='md:h-50 overflow-hidden'>
        <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
          >
          {
            img.map(img => <img src={img} className="h-full" width="100%"></img>)
          }
          </Carousel>
        </div>
        <div className='text-gray-800 text-3xl mt-5'>
        <h1 className='text-center'>{name}</h1>
        </div>
        </Link>
    );
};

export default PopularCard;