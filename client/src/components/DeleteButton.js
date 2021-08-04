import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ axeId, setAxeId ] = useState (props.id);
    const deleteAxe = (AxeId) => {
        axios.delete(`http://localhost:8000/api/axe/${ axeId }`)
            .then((res) => {
                console.log(res.data);
                // setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteAxe(props._id) }>Delete</button>
    )
}

export default DeleteButton;