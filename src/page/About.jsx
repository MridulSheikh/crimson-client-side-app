import React from 'react';
import About_Photo_collage from '../component/about/About_Photo_collage';
import About_top_page from '../component/about/About_top_page';
import Contect from '../component/sheared/Contect';

const About = () => {
    return (
        <div>
            <About_top_page />
            <About_Photo_collage />
            <Contect />
        </div>
    );
};

export default About;