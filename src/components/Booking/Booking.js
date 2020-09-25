import React from 'react';
import bed1 from '../../Image/bed1-1.png'
import bed2 from '../../Image/bed2.png'
import bed3 from '../../Image/bed3.png'
import review1 from '../../Image/review1.png'
import review2 from '../../Image/review2.png'
import review3 from '../../Image/review3.png'
import Map from '../Map/Map';

const Booking = () => {

    
    return (
        <div className= 'row'>
        <div className = ' col-md-6'>
            
            <img className="w-25 py-4 m-4" src={bed1} alt=""/>
            <img className="w-50 py-4 my-4" src={review1} alt=""/>

            <img className="w-25 py-4 m-4" src={bed2} alt=""/>
            <img className="w-50 py-4 my-4" src={review2} alt=""/>

            <img className="w-25 py-4 m-4" src={bed3} alt=""/>
            <img className="w-50 py-4 my-4" src={review3} alt=""/>
        </div>

        <div className="col-md-6">
            <h1 className='text-center'>Google map location</h1>
            <Map></Map>
        </div>

    </div>
    );
};

export default Booking;