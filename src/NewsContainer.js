import React from 'react';
import GraphContainer from './GraphContainer';
import ScoreContainer from './ScoreContainer';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1rem;
    margin: 3rem;
    border-radius: 1rem;
    border: solid black .1rem;
`;

const NewsTitle = styled.h1`
    margin: 0;
    font-family: Merriweather;
    font-size: 1rem;
`;

function NewsContainer(props) {
    return (
        <Card>
            <NewsTitle>{props.title}</NewsTitle>
            <ScoreContainer />
            <GraphContainer />
        </Card>
    )
}

export default NewsContainer;  