import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import d1 from './1.jpg';
import d2 from './2.jpg';
import dc_logo from './Dhaka_College_Logo.svg.png';


const Home = () => {
    return (
        <div>
            <h4 className='mt-3 p-3 bg-primary text-white'>Welcome To Dhaka College</h4>
            <div className='d-flex justify-content-center'>
                <Carousel className='w-50'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={dc_logo}
                            alt="First slide"
                            width={'300px'} height={'300px'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={d1}
                            alt="Second slide"
                            width={'300px'} height={'300px'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={d2}
                            alt="Third slide"
                            width={'300px'} height={'300px'}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;