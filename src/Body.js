import React from 'react';
import NewsContainer from './NewsContainer';

// TO DO: update once APIs have been researched
let newsSources = ['NYT', 'WSJ', 'WaPo']

function Body() {
    return (
        newsSources.map((newsSource, index) => {
            return <NewsContainer key ={index} title={newsSource} />
        })
    )
};

export default Body;