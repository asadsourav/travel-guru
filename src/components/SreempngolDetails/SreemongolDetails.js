
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SreemongolDetails = () => {
    return (
        <div className="row">
        <div className="col-md-6 ml-5">
            <h1 className="mt-5 py-5">Sreemongol Details</h1>
            <p>Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal. </p>
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

export default SreemongolDetails;