import React, { Component } from "react";
import WeatherInfo from './weatherInfo'
import data from '../data';

import '../css/main.scss';

class PropperApp extends Component {
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
    hChange(e) {
        this.setState({
            selectedStation: e.target.value
        })
    }

    render() {
        const { selectedStation } = this.state
        return (
            <section className="app">
                <div className="app__form">
                    <select className="app__form__select" defaultValue='chuj' onChange={this.hChange}>
                        <option value="avg">Wybierz stacje meteorologiczną...</option>
                        <option value="ti">Technikum informatyczne</option>
                        <option value="la">Liceum akademickie</option>
                        <option value="hosp">Hospicujm w pucku</option>
                    </select>
                </div>
                <WeatherInfo selcStation={selectedStation} />
            </section>
        );
    }
}

export default PropperApp;
