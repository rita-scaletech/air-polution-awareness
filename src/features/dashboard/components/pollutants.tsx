import { pollutantsDetails } from '../constant/dashboard';

const Pollutants = () => {
    return (
        <div className='facts--container'>
            <h3 className='title'>Pollutants</h3>
            <ul className='facts--details'>
                {pollutantsDetails.map(({ title, info }: any, index: number) => {
                    return (
                        <div key={index}>
                            <p className='fact mb--10'>
                                {title}
                            </p>
                            <li className='fact mb--10'>
                                {info}
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Pollutants;
