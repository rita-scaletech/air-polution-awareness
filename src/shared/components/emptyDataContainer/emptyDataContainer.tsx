import React from 'react';

interface IEmptyDataContainerProps {
    text?: string;
}

const EmptyDataContainer: React.FC<IEmptyDataContainerProps> = (props) => {
    return (
        <div className='empty-data-wrapper'>
            {props.text}
        </div>
    );
};

export default EmptyDataContainer;