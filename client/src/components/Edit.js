import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    
    const [ serial, setSerial ] = useState();
    const [ make, setMake ] = useState();
    const [ model, setModel ] = useState();
    const [ year, setYear ] = useState();
    const [ description, setDescription ] = useState();
    const [ axeUrl, setAxeUrl ] = useState();
    const [ errs, setErrs ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/axe/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); 
                let instrument = res.data;
                setSerial(instrument.serial); //this is saying set licensed to song license
                setMake(instrument.make);
                setModel(instrument.model);
                setYear(instrument.year);
                setDescription(instrument.description);
                setAxeUrl(instrument.axeUrl);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);


    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        
        axios.post("http://localhost:8000/api/axe", {
            serial: serial,
            make: make,
            model: model,
            year: year,
            description: description,
            axeUrl: axeUrl,
            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Edit Instrument</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Serial: </label>
                    <input type="text"
                    name="serial"
                    value={serial}
                    onChange={ (e) => setSerial( e.target.value ) }
                    />
                    {
                        errs.name ?
                            <span className="error-text">{errs.serial.message}</span>
                            : null
                    }

                </div>
                <div>
                    <label> Make: </label>
                    <input type="text"
                    name="make"
                    value={make}
                    onChange={ (e) => setMake( e.target.value ) }
                    />
                    {
                        errs.make ?
                        <span className="error-text">{errs.make.message}</span>
                            : null
                    }

                </div>

                <div>
                    <label> Model: </label>
                    <input type="text"
                    name="model"
                    value={model}
                    onChange={ (e) => setModel( e.target.value ) }
                    />
                    {
                        errs.model ?
                        <span className="error-text">{errs.model.message}</span>
                            : null
                    }
                </div>  

                <div>
                    <label> Year: </label>
                    <input type="text"
                    name="year"
                    value={year}
                    onChange={ (e) => setYear( e.target.value ) }
                    />
                    {
                        errs.year ?
                        <span className="error-text">{errs.year.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label> Description: </label>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />
                    {
                        errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Picture: </label>
                    <input type="text"
                    name="axeUrl"
                    value={axeUrl}
                    onChange={ (e) => setAxeUrl( e.target.value ) }
                    />
                    {
                        errs.axeUrl ?
                        <span className="error-text">{errs.axeUrl.message}</span>
                            : null
                    }
                </div>
                <div>
                <button type="submit">Add Instrument</button>
                <button onClick={ () => navigate("/")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;