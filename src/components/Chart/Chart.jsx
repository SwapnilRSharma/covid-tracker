import React, { useState , useEffect} from 'react' ;
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {

    const lineChart =(
        <Line 
               data={ 
                        {
                            labels :["January", "February","March", "April" ,"May "] ,
                            datasets : [
                            {
                           
                            data: [
                              100,
                              250,
                              322,
                              350,
                              500,
                            ],
                            label : 'Confirmed',
                            fill: true,
                            borderColor: '#3333ff'
                             } , {
                               
                                data: [
                                  20,
                                  110,
                                  190,
                                  250,
                                  300,
                                ],
                                label : 'Deaths',
                                fill: true,
                                borderColor: 'red',
                                backgroundColor: 'rgba(255,0,0,0.5)'
                                 }
                           ]        
               }
            }         
        />

    );
    return(
    <div className={styles.container}>
        {lineChart}
    </div>)

}

export default Chart;