import React, {Component} from 'react';
import {View} from 'react-native'
import MatrixWrapper from './containers/MatrixWrapper'
import Dashboard from './components/Dashboard'


class App extends Component {
    render() {
        return (
            <View className="App">
                <Dashboard/>
                <MatrixWrapper/>
            </View>
        );
    }
}

export default App;
