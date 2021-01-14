import React from 'react';
import GraphContainer from './GraphContainer';
import ScoreContainer from './ScoreContainer';


function NewsContainer(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ScoreContainer />
            <GraphContainer />
        </div>
    )
}

export default NewsContainer;  