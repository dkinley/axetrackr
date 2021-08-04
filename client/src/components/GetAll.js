import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const GetAll = (props) => {
    const [ allInstruments, setAllInstruments ] = useState([]); // put in an array, as there is an array of objects expected, see postman which gets back and array of objects
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/axe") //use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data came back correctly in the console
                //need state to hold onto the data we just called, do this above with const all
                setAllInstruments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>Serial Number</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </thead>
                <tbody>
                    {
                        allInstruments.map((axe, index) => (
                        <tr>
                            <td>
                                <Link to={ `/axe/${axe._id}`} >{axe.serial} </Link>
                            </td>
                            <td>
                                <p>{axe.make} </p>
                            </td>
                            <td>
                                <p>{axe.model} </p>
                            </td>
                            <td>
                                <p>{axe.year} </p>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default GetAll;