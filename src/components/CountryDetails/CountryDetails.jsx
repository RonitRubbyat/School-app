import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { SampleContext } from '../../App';

const CountryDetails = () => {
    const details = useLoaderData();
    const [detail] = details;
    const { name, flags, independent, maps } = detail;
    const sample = useContext(SampleContext);
    
    const [a, b] = sample;
    console.log(a);


    return (
        <div className='my-5 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flags.svg} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        independent: {
                            independent ? "Yes "+ a : "NO "+ b
                        }
                    </Card.Text>
                    <Button variant=""><a href={maps.googleMaps}>Map</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountryDetails;