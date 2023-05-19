import React, { useEffect, useState } from 'react'
import { sensorTableHeader } from '../constant/dashboard'


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
            <table className='sensors--list'>
                <thead>
                    <tr>
                        {sensorTableHeader.map(({ name }, index) =>
                            <th key={index}>{name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sensorsList && sensorsList.map(({ sensor_name, sensor_type, location, severity, temperature, latitude, co, longitude, pm25 }, index: number) =>
                        <tr key={index}>
                            <td>{sensor_name}</td>
                            <td>{sensor_type}</td>
                            <td>{location}</td>
                            <td>{severity}</td>
                            <td>{temperature}</td>
                            <td>{latitude}</td>
                            <td>{co}</td>
                            <td>{longitude}</td>
                            <td>{pm25}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SensorsList