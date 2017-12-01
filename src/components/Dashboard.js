/**
 * Created by cuyu on 4/6/17.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import InputWrapper from '../containers/InputWrapper'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        // flex: 1,
        flexDirection: 'row',
    }
});


class Dashboard extends Component {

    render() {
        return (
           <View className="Dashboard" style={styles.container}>
               <Text>Difficulty:</Text>
               <InputWrapper type="number" min="1" max="9" id="difficulty"/>
               {/*<br/>*/}
               <Text>Matrix Width:</Text>
               <InputWrapper type="number" min="5" id="width"/>
               {/*<br/>*/}
               <Text>Matrix Height:</Text>
               <InputWrapper type="number" min="5" id="height"/>
               {/*<br/>*/}
               <Text>Snake Length:</Text>
               <InputWrapper type="number" min="2" id="snakeLength"/>
               {/*<br/>*/}
               <Text>Score:</Text>
               <InputWrapper disabled id="score"/>
           </View>
        );
    }
}

export default Dashboard;