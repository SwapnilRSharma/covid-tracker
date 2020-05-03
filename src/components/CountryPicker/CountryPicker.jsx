import React, {useState, useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import styles from './Country.module.css';
const CountryPicker= () => {
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect >
                <option value="">Global</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujrat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Kerela">Kerela</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;