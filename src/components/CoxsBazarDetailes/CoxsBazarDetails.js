import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoxsBazarDetails = () => {
    return (
        <div className="row">
            <div className="col-md-6 ml-5">
                <h1 className="mt-5 py-5">Cox's Bazar Details</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className = 'text-muted '><small>origin</small></Card.Title>
                        
                        <Card.Subtitle style={{borderRadius: '5px',background: 'lightGray',padding: '15px'}} className="mb-2 text-black">Dhaka</Card.Subtitle>
                        <Card.Title className = 'text-muted '><small>Destination</small></Card.Title>
                        
                        <Card.Subtitle style={{borderRadius: '5px',background: 'lightGray',padding: '15px'}} className="mb-2 text-black">Cox's Bazar</Card.Subtitle>
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

export default CoxsBazarDetails;