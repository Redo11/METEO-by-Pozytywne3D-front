import React, { Component } from "react";
import data from '../data';

class WeatherInfo extends Component{
    constructor(){
        super()
        this.state = {
            endPoint: [],
        }
    }
    componentDidUpdate() {
        const { endPoint } = this.state
        let { selcStation } = this.props

        let name = 'null'
        switch (selcStation) {
            case 'avg':
                console.log(data.station.avg);
                name = data.station.avg
                break;
            case 'ti':
                console.log(data.station.ti);
                name = data.station.ti
                break;
            case 'la':
                console.log(data.station.la);
                name = data.station.la
                break;
            case 'hosp':
                console.log(data.station.hosp);
                name = data.station.hosp
                break;
            default:
        }
        if (endPoint !== name) {
            this.setState({ endPoint: name });
        }
        console.log(this.state.endPoint)
    }
    render() {
        const { endPoint } = this.state
        return (
            <div>
                <h1>Stacja</h1>
                <p>{endPoint.name}</p>
            </div>
        );
    }
}
WeatherInfo.defaultProps = {
    selcStation: 'avg'
};

export default WeatherInfo