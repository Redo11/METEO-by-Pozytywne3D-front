import React, { Component } from "react";
import data from '../data';
import Chart from './chart'

class WeatherInfo extends Component{
    constructor(){
        super()
        this.state = {
            endPoint: []
        }
    }
    componentDidMount(){
        this.setState({
            endPoint: data.station.ti
        })
    }
    componentDidUpdate() {
        const { endPoint } = this.state
        let { selcStation } = this.props
        
        let endHook
        switch (selcStation) {
            case 'avg':
                endHook = data.station.avg
                break;
            case 'ti':
                endHook = data.station.ti
                break;
            case 'la':
                endHook = data.station.la
                break;
            case 'hosp':
                endHook = data.station.hosp
                break;
            default:
                endHook = 'Brak informacji o wybranej stacji...'
        }
        if (endPoint !== endHook) {
            this.setState({ endPoint: endHook });
        }
        //console.log(this.state.endPoint) //! Loging endPoint data
    }
   
    render() {
        const { endPoint } = this.state

        const ifNotAvg = (numb) => (
            numb == null ? 'Puck' : `Stacja nr. ${numb}`
        )
            return (
                <div className="app__weatherInfo">
                    {
                        endPoint.length !== 0 ? (
                            <div>
                                <header className="weatherInfo__header">
                                    <h2 className="weatherInfo__header--text">{ifNotAvg(endPoint.number)}</h2>
                                    <p className="weatherInfo__header--title">{endPoint.name}</p>
                                </header>
                                <div className="weatherInfo__table">
                                    <div className="weatherInfo__table__element">
                                        <h4 className="weatherInfo__table__element--title">Temperatura powietrza</h4>
                                        <p className="weatherInfo__table__element--info">{endPoint.now.airtemperature}°C</p>
                                    </div>
                                    <div className="weatherInfo__table__element">
                                        <h4 className="weatherInfo__table__element--title">Wilgotność powietrza</h4>
                                        <p className="weatherInfo__table__element--info">{endPoint.now.humidityair}%</p>
                                    </div>
                                    <div className="weatherInfo__table__element">
                                        <h4 className="weatherInfo__table__element--title">Ciśnienie atmosferyczne</h4>
                                        <p className="weatherInfo__table__element--info">{endPoint.now.pressurweather} hpa</p>
                                    </div>
                                    <div className="weatherInfo__table__element">
                                        <h4 className="weatherInfo__table__element--title">Index IAQ*</h4>
                                        <p className="weatherInfo__table__element--info "><span className="iaq_index">{endPoint.now.indexiaq} - Dobry</span></p>
                                    </div>
                                </div>
                                <div className="weatherInfo__charts">
                                    <Chart dataType={'Temperatura powietrza'} dataPoint={endPoint.hourly.temperature} />
                                    <Chart dataType={'humWilgotność powietrzaidityair'} dataPoint={endPoint.hourly.humidityair} />
                                    <Chart dataType={'Ciśnienie atmosferyczne'} dataPoint={endPoint.hourly.pressurweather} />
                                    <Chart dataType={'Index IAQ'} dataPoint={endPoint.hourly.indexiaq} />
                                </div>
                            </div>

                        ): null
                    }
                    
                </div>
            );
    }
}
WeatherInfo.defaultProps = {
    selcStation: 'avg'
};

export default WeatherInfo