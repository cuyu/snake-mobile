/**
 * Created by cuyu on 3/31/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View} from 'react-native';
import {COLOR_MAP} from '../constants/color-mapping'


class Cell extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        const color = COLOR_MAP[this.props.value.toString()];
        const styles = StyleSheet.create({
            cell: {
                width: 10,
                height: 10,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'gray',
                backgroundColor: color,
            }
        });
        return (
            <View className="Cell" style={styles.cell}>
            </View>
        );
    }
}

export default Cell