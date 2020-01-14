import React, { Component } from "react";
import PropperApp from './components/propperApp'
import Header from './components/header'

import './css/main.scss';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <PropperApp />
            </div>
        )
    }
}

export default App;
