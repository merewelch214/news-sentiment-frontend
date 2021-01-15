import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 1rem;
    border: black solid 1px;
    margin: 1rem;
`;

const ScoreTitle = styled.h1`
    font-size: 1rem;
    margin: 1.1rem;
`;

function ScoreContainer() {
    return (
        <Container>
            <ScoreTitle>Today's score</ScoreTitle>
        </Container>
    )
}

export default ScoreContainer;  