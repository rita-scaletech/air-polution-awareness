import React from 'react'
import SensorsList from '../components/sensorsList';
import AboutAirPollution from '../components/aboutAirPollution';
import Pollutants from '../components/pollutants';

const Dashboard = () => {
    return (
        <div className='dashboard--container'>
            <div className='dashboard--wrapper'>
                <div className='hero--section'>
                    {/* <h1 className='main--title text--black'>Ahmadabad's Air Pollution : Real-time Air sensors data
                    </h1> */}
                    <h1 className='main--title text--black'>Air Pollution</h1>
                </div>
                <div className='about--wrapper flex'>
                    <AboutAirPollution />
                    <Pollutants />
                </div>
                <SensorsList />
            </div>
        </div>
    )
}

export default Dashboard