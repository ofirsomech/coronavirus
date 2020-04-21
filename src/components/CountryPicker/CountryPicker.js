import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from "@material-ui/core";
import './CountryPicker.css';
import { getCountries } from "../../Api";


const CountryPicker = (props) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setCountries(await getCountries());
        }
        getData();
    }, [setCountries])
    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>
                {countries.map((country) => < option value={country}>{country}</option>)} </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;