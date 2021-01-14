import React from 'react';
import NewsContainer from './NewsContainer';

// TO DO: update once APIs have been researched
let newsSources = ['NYT', 'WSJ', 'WaPo']

const Body = () => {
    return (
        newsSources.map((newsSource) => {
            return <NewsContainer title={newsSource} />
        })
    )
};

export default Body;