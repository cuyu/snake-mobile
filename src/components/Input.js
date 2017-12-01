/**
 * Created by cuyu on 4/6/17.
 */

import React, {Component} from 'react';
import {TextInput} from 'react-native'
import PropTypes from 'prop-types'


function filterObject(target, whiteList) {
    let result = {};
    for (let i = 0; i < whiteList.length; ++i) {
        if (whiteList[i] in target) {
            result[whiteList[i]] = target[whiteList[i]];
        }
    }
    return result;
}


const VALID_PROPS = ['disabled', 'name', 'type', 'min', 'max',];


class Input extends Component {
    static propTypes = {
        handleValueChange: PropTypes.func.isRequired,
    };

    render() {
        let filteredProps = filterObject(this.props, VALID_PROPS);
        return (
            <TextInput {...filteredProps} value={this.props.value.toString()} onChangeText={this.props.handleValueChange}/>
        );
    }
}

export default Input;
