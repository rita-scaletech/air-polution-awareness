import React, { useEffect, useState } from 'react'
import { sensorTableHeader } from '../constant/dashboard'
import { PbBody, PbCell, PbHead, PbRow, PbTable } from 'shared/components/table';


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
    // console.log("SensorsList ~ sensorsData:", sensorsData)

    const [sensorsList, setSensorsList] = useState<ITableProps[]>()

    const handleSensorData = () => {
        setSensorsList(sensorsData.data.sensors)
    }


    useEffect(() => {
        handleSensorData()
    }, [])


    return (
        <div className='sensors--list-container m--0-auto'>
            <div>
                <h3 className='text--center'>Area wise sensor details</h3>
            </div>
            <PbTable className='sensors--list'>
                <PbHead>
                    <PbRow>
                        {sensorTableHeader.map(({ name }, index) =>
                            <PbCell key={index}>{name}</PbCell>
                        )}
                    </PbRow>
                </PbHead>
                <PbBody>
                    {sensorsList && sensorsList.map(({ sensor_name, sensor_type, location, severity, temperature, latitude, co, longitude, pm25 }, index: number) =>
                        <PbRow key={index}>
                            <PbCell>{sensor_name}</PbCell>
                            <PbCell>{sensor_type}</PbCell>
                            <PbCell>{location}</PbCell>
                            <PbCell>{severity}</PbCell>
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
    )
}

export default SensorsList