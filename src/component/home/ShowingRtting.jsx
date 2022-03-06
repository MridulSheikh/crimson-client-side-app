import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import ShowingRattingCard from './ShowingRattingCard';
import "react-multi-carousel/lib/styles.css";

const ShowingRtting = () => {
    const [ratting, setRatting] = useState([]);
    useEffect(()=>{ 
        axios.get("https://arcane-refuge-73765.herokuapp.com/ratting/showing")
        .then(res =>{
            setRatting(res.data)
        })
    },[])

    //handle carousel responsive
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className='my-20 px-5 md:px-10'>
            <div className='text-center'>
            <h1 className='text-center text-2xl md:text-5xl font-mono text-gray-800 pt-20 pb-20 '>our customer revew</h1>
            </div>
            <div>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                arrows={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
            {
                ratting.map(ratting => <ShowingRattingCard 
                    key={ratting._id}
                     name={ratting.name}
                     email={ratting.email}
                     ratting={ratting.ratting}
                     about={ratting.about}
                    />)
            }
            </Carousel>
            </div>
        </div>
    );
};

export default ShowingRtting;