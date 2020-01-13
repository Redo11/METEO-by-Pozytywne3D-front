import React, { Component } from "react";
import WeatherInfo from './components/weatherInfo'
import data from './data';

import './css/main.scss';

class App extends Component {
    constructor() {
        super()
        this.state = {
            api: [],
            selectedStation: undefined,
        }

        this.hChange = this.hChange.bind(this);
    }
    componentDidMount() {
        const { api } = this.state

        console.log(data)
        this.setState({
            api: api.push(data),
        })
    }
    hChange(e){
        this.setState({
            selectedStation: e.target.value
        })
    }
    
    render() {
        const { selectedStation } = this.state
        return (
            <section className="app">
                <div>
                    <select defaultValue='chuj' onChange={this.hChange}>
                        <option value="avg">Wybierz punkt</option>
                        <option value="ti">Technikum</option>
                        <option value="la">Liceum</option>
                        <option value="hosp">Hospicujm</option>
                    </select>
                </div>
                <WeatherInfo selcStation={selectedStation} />
            </section>
        );
    }
}

export default App;
