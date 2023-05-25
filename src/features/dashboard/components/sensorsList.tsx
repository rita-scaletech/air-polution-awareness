import React, { useEffect, useState } from 'react'
import { sensorTableHeader } from '../constant/dashboard'
import { PbBody, PbCell, PbHead, PbRow, PbTable } from 'shared/components/table';
import GoogleMap from './mapContainer';


interface ITableProps {
    co: number;
    description: string;
    id: number;
    installation_date: string;
    latitude: number;
    location: string;
    longitude: number;
    pm25: number;
    sensor_name: string;
    sensor_type: string;
    severity: string;
    temperature: number;
}
const SensorsList = () => {
    const sensorsData = require('../JSON/sensorData.json')
    const [sensorsList, setSensorsList] = useState<ITableProps[]>()

    useEffect(() => {
        setSensorsList(sensorsData.data.sensors)
    }, [])


    return (
        <div className='sensors--list-container m--0-auto'>
            <div id='haze'>
                <h3 className='text--center mb--20'>Ahmadabad's Air Pollution : Area wise sensor details</h3>
                <PbTable className='sensors--list'>
                    <PbHead>
                        <PbRow>
                            {sensorTableHeader.map(({ name }, index) =>
                                <PbCell className='table-title' key={index}>{name}</PbCell>
                            )}
                        </PbRow>
                    </PbHead>
                    <PbBody>
                        {sensorsList && sensorsList.map(({ sensor_name, sensor_type, location, severity, temperature, latitude, co, longitude, pm25 }, index: number) =>
                            <PbRow className='table-row' key={index}>
                                <PbCell>{sensor_name}</PbCell>
                                <PbCell>{sensor_type}</PbCell>
                                <PbCell>{location}</PbCell>
                                <PbCell>
                                    <p>{severity}</p>
                                </PbCell>
                                <PbCell>{temperature}</PbCell>
                                <PbCell>{latitude}</PbCell>
                                <PbCell>{co}</PbCell>
                                <PbCell>{longitude}</PbCell>
                                <PbCell>{pm25}</PbCell>
                            </PbRow>
                        )}
                    </PbBody>
                </PbTable>
            </div>

            <div id='aqi' className='mt--50'>
                <h3 className='text--center mt--30 mb--20'>Ait Quality Index</h3>
                <GoogleMap pollutionData={sensorsList} />
            </div>
        </div>
    )
}

export default SensorsList