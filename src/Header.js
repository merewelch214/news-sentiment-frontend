import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: Merriweather;
    font-size: 2rem;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 0;
    margin: 0;
`;

const Subtitle = styled.div`
    font-family: Open Sans; 
    font-size: 1rem;
    text-align: center;
    padding: .3rem;
    margin: 0;
`

function Header() {
    return (
        <HeaderContainer>
            <Title>News Sentiment Analyzer</Title>
            <Subtitle>Today's date is {moment().format('MMMM Do YYYY')}</Subtitle>
        </HeaderContainer>
    )
}

export default Header;  