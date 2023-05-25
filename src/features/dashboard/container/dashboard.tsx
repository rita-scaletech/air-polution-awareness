import React from 'react';
import SensorsList from '../components/sensorsList';
import AboutAirPollution from '../components/aboutAirPollution';
import Pollutants from '../components/pollutants';

const Dashboard = () => {
    return (
        <div className='dashboard--container'>
            <div className='dashboard--wrapper'>
                <div className='hero--section'>
                    <div className='header flex align-items--center justify-content--between'>
                        <h1 className='main--title text--black'>Air Pollution</h1>
                        <div className='flex'>
                            <p className='mr--30 font-size--xl cursor--pointer'>
                                <a className='text--black' href='#haze'>Beyond the Haze </a>
                            </p>
                            <p className='font-size--xl cursor--pointer' title='Ait Quality Index'>
                                <a className='text--black' href='#aqi'>AQI</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='about--wrapper flex'>
                    <AboutAirPollution />
                    <Pollutants />
                </div>
                <SensorsList />
            </div>
        </div>
    );
};

export default Dashboard;
