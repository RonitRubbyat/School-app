import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Blogs = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div className='d-flex justify-content-center'>
            <Row xs={1} md={2} lg={3} className="g-4 w-75">
                {
                    countries.map((country, idx) => <Country
                        key={idx}
                        country={country}
                    ></Country>)
                }
            </Row>
        </div>
    );
};

export default Blogs;