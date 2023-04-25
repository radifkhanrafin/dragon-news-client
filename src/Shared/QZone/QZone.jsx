/* eslint-disable no-unused-vars */
import React from 'react';
import Q_zone1 from "../../assets/qZone1.png"; 
import Q_zone2 from "../../assets/qZone2.png"; 
import Q_zone3 from "../../assets/qZone3.png"; 
const QZone = () => {
    return (
        <div  className='bg-secondary py-3 text-center'>
            <h4>Q-Zone</h4>
            <div>
                <img src={Q_zone1} alt="" />
                <img src={Q_zone2} alt="" />
                <img src={Q_zone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;