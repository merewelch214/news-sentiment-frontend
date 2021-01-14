import React from 'react';
import moment from 'moment';

function Header() {
    return (
        <div>
            <h1>News Sentiment Analyzer</h1>
            <h2>Today's date is {moment().format('MMMM Do YYYY')}</h2>
        </div>
    )
}

export default Header;  