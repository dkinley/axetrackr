import React from 'react';
import { navigate } from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>The Instrument Assortment</h1>
            <div>
                <button onClick={ () => navigate("/")}>List All</button>
                <button onClick={ () => navigate("/axe/create")}>Create New</button>
            </div>
        </div>
    )
};

export default Header;