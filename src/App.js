import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';
import styles from './App.module.css';
import coronaImage from './images/image.png'

class App extends React.Component{
    state = {
        data: {},
    }
    async componentDidMount() {
        console.log('This is in setup-api branch');

        const fetchedData = await fetchData();
        this.setState(() => {
            return {
                data : fetchedData,
            };
        });
    }

  

    render(){

        const {data} = this.state;

        return (
            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="Covid-19"/>
                <Cards data={data}/>
                <CountryPicker  />
                <Chart />
            </div>
        );
    };
}

export default App;