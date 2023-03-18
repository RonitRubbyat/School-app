import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    // console.log(country);
    const navigate = useNavigate();

    const handelNavigate = name => {
        navigate(`/blogs/${name}`);
    }

    const { name, flags, population, area, maps } = country;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={flags.svg} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        <div>
                            <h4>Population: {population}</h4>
                            <h5>Area: {area}</h5>
                            <p><small>Map Link: <a href={maps.googleMaps}>{maps.googleMaps}</a></small></p>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={()=>handelNavigate(name.common)} className='btn w-100 text-muted'>Learn more</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Country;