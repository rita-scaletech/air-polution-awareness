import React, { FC } from 'react'
import { aboutPollution } from '../constant/dashboard'

const AboutAirPollution: FC = () => {
    return (
        <div className='facts--container'>
            <h3 className='title'>Key Facts of Air Pollution?</h3>
            <ul className='facts--details'>
                {aboutPollution.map(({ info }: any, index: number) => {
                    return <li className='fact mb--10' key={index} > {info}</li>
                })}
            </ul>
        </div>
    )
}

export default AboutAirPollution