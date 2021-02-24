import React from 'react';
import NewsContainer from './NewsContainer';
import styled from 'styled-components';

// TO DO: update once APIs have been researched
const newsSources = ['New York Times', 'Wall Street Journal', 'Washington Post']

const Container = styled.div`
    display: flex;
    direction: column;
    justify-content: center;
`;

function Body() {
    return (
        <Container>
            {newsSources.map((newsSource, index) => {
                return <NewsContainer key ={index} title={newsSource} />
            })}
        </Container>
    )
};

export default Body;