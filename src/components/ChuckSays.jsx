import React from 'react';
import './ChuckSays.css';

const ChuckSays = props => {
    const { chuckData } = props;
    return(
        <p className='user-card'>{chuckData}</p>
    )


}

export default ChuckSays;


