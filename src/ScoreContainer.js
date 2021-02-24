import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 1rem;
    border: black solid 1px;
    margin: 1rem;
`;

const ScoreTitle = styled.h1`
    font-size: .8rem;
    margin: .5rem 1.1rem;
`;

const ScoreNum = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    `;

function ScoreContainer() {
    return (
        <Container>
            <ScoreTitle>Today's score</ScoreTitle>
            <ScoreNum>4.2</ScoreNum>
        </Container>
    )
}

export default ScoreContainer;  