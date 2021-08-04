import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Details = (props) => {
    const [ instrument, setInstrument ] = useState({});
        
    useEffect(() => {
        axios.get('http://localhost:8000/api/axe/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); //.then gives response object which is commonly referred to as res
                setInstrument(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    return (
        <div>
            <h1>Instrument Details</h1> 
            <table>
                <tr>
                <td>
                    Serial:
                </td>
                <td>
                    { instrument.serial }
                </td>
                </tr>
                <tr>
                <td>
                    Make:
                </td>
                <td>
                    { instrument.make }
                </td>
                </tr>
                <tr>
                <td>
                    Model:
                </td>
                <td>
                    { instrument.model }
                </td>
                </tr>
                <tr>
                <td>
                    Year:
                </td>
                <td>
                    { instrument.year }
                </td>
                </tr>
                <tr>
                <td>
                    Details:
                </td>
                <td>
                    { instrument.details }
                </td>
                </tr>
                <tr>
                <td>
                    Picture:
                </td>
                <td>
                    { instrument.picture }
                </td>
                </tr>
            </table>
            <div>
            <button onClick={ () => navigate("/")}>Back</button>
            <button onClick={ () => navigate("/create")}>Add Instrument</button>
            </div>
            
        </div>
    )
};

export default Details;