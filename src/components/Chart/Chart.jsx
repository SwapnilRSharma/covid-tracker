import React, { useState , useEffect} from 'react' ;
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import {fetchDailyData} from '../../api';


const Chart = () => {

    const [dailyData, setDailyData ]=useState([]);
    useEffect(()=>{
      const fetchAPI=async()=>{
        console.log(dailyData);
        setDailyData(await fetchDailyData());
      }

      console.log(dailyData);
      fetchAPI();
    });

    const lineChart =(
      dailyData.length 
        ?(<Line 
               data={ 
                        {
                            labels : dailyData.map(({date})=> date),
                            datasets : [
                            {
                              data:dailyData.map(({confirmed})=> confirmed),
                              label : 'Infected',
                              borderColor:'#3333ff',
                              fill: true
                            },
                            
                           {
                            data:dailyData.map(({deaths})=> deaths),
                            label : 'Deaths',
                            borderColor:'red',
                            backgroundColor: 'rgba(255, 0 ,0 ,0.5)',
                            
                            fill: true
                            } 
                           ]       
               }
            }         
        />) :null

    );

   /* const barChart = (
        <Bar>
          data = {{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets : [{
                label : 'People',
                backgroundColor:[
                  'rgba(0,0,255,0.5)',
                  'rgba(0,255,0,0.5)',
                  'rgba(255,0,0,0.5)' ],
                  data : [100, 20 , 10]
              }]
          }}
          options = {{
            legend : {display : false},
            title : {display : true , text : 'Current state '},
          }}
        </Bar>
    );*/
    return(
    <div className={styles.container}>
        {lineChart}
    </div>)

}

export default Chart;