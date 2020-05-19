import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
        <div>
            <h1>This is the other page!!</h1>
            <Link to='/'>Go to people page!</Link>
        </div>
    )
}

export default OtherPage;