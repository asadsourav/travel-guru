import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SundorbanDetails = () => {
    return (
        <div className="row">
        <div className="col-md-6 ml-5">
            <h1 className="mt-5 py-5">Sundarbans Details Details</h1>
            <p>The Sundarbans are the largest littoral mangrove belt in the world, stretching 80 km (50 mi) into the Bangladeshi and Indian hinterland from the coast. The Sundarbans has been declared a UNESCO World Heritage Site. The forests aren't just mangrove swamps though, they include some of the last remaining stands of the mighty jungles which once covered the Gangetic plain. The Sundarbans cover an area of 10,500 sq km, of which about one-third is covered in water/marsh areas. Since 1966 the Sundarbans have been a wildlife sanctuary, and it is estimated that there are now 400 Royal Bengal tigers and about 30,000 spotted deer in the area. </p>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className = 'text-muted '><small>origin</small></Card.Title>
                    
                    <Card.Subtitle style={{borderRadius: '5px',background: 'lightGray',padding: '15px'}} className="mb-2 text-black">Dhaka</Card.Subtitle>
                    <Card.Title className = 'text-muted '><small>Destination</small></Card.Title>
                    
                    <Card.Subtitle style={{borderRadius: '5px',background: 'lightGray',padding: '15px'}} className="mb-2 text-black">Sreemongol </Card.Subtitle>
                    <Card.Title className = 'text-muted '><small>From</small></Card.Title>

                    <input style={{borderRadius: '5px',background: 'lightGray'}}type="date" name="" id=""/>
                    <Card.Title className = 'text-muted '><small>To</small></Card.Title>

                    <input style={{borderRadius: '5px',background: 'lightGray'}}type="date" name="" id=""/>
                        <br/>
                        <Link to="/Booking">
                    <Card.Link className="text-center py-3" style={{color: 'black', background:'orange',margin: '10px auto',display: 'block',borderRadius: '5px'}} href="/Booking">Start Booking</Card.Link>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>


    </div>
    );
};

export default SundorbanDetails;