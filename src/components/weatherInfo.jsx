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
        console.log(this.state.endPoint)
    }
    render() {
        const { endPoint } = this.state

        const ifNotAvg = (numb) => (
            numb == null ? 'Puck' : `Stacja nr. ${numb}`
        )
            return (
                <div className="app__weatherInfo">
                    <header className="weatherInfo__header">
                        <h2 className="weatherInfo__header--text">{ ifNotAvg(endPoint.number) }</h2>
                        <p className="weatherInfo__header--title">{ endPoint.name }</p>
                    </header>
                    <div className="weatherInfo__table">
                        <div className="weatherInfo__table__element">
                            <h4 className="weatherInfo__table__element--title">Temperatura powietrza</h4>
                            <p className="weatherInfo__table__element--info">{  } 12°C</p>
                        </div>
                        <div className="weatherInfo__table__element">
                            <h4 className="weatherInfo__table__element--title">Wilgotność powietrza</h4>
                            <p className="weatherInfo__table__element--info">{  }82%</p>
                        </div>
                        <div className="weatherInfo__table__element">
                            <h4 className="weatherInfo__table__element--title">Ciśnienie atmosferyczne</h4>
                            <p className="weatherInfo__table__element--info">{  } 1024 hpa</p>
                        </div>
                        <div className="weatherInfo__table__element">
                            <h4 className="weatherInfo__table__element--title">Index IAQ*</h4>
                            <p className="weatherInfo__table__element--info "><span className="iaq_index">{}28 - Dobry</span></p>
                        </div>
                    </div>
                </div>
            );
    }
}
WeatherInfo.defaultProps = {
    selcStation: 'avg'
};

export default WeatherInfo