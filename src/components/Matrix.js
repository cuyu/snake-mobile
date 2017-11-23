/**
 * Created by cuyu on 3/31/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Button} from 'react-native';
import CellWrapper from '../containers/CellWrapper'
// import './Matrix.css'
import {DIFFICULTY} from '../constants/game-difficulty'


class Matrix extends Component {
    static propTypes = {
        handleReset: PropTypes.func.isRequired,
        handleKeyPress: PropTypes.func.isRequired,
        handleSnakeMove: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.loopSnakeMove = this.loopSnakeMove.bind(this);
    }

    componentWillMount() {
        this.props.handleReset();
    }

    loopSnakeMove() {
        this.props.handleSnakeMove();
        if (!this.props.stop) {
            setTimeout(this.loopSnakeMove, DIFFICULTY[this.props.difficulty]);
        }
    }

    render() {
        // The Matrix should only be rendered once while some Cells may be rendered later.
        console.log('Matrix rendered.', this.props);
        let content = [];
        for (let i = 0; i < this.props.height; ++i) {
            let rowContent = [];
            for (let j = 0; j < this.props.width; ++j) {
                let id = i * this.props.width + j;
                rowContent.push(<CellWrapper key={id.toString()} id={id} value={0}/>);
            }
            content.push(
                <View key={i.toString()} className="Row">
                    {rowContent}
                </View>
            );
        }

        return (
            <View className="Matrix" onKeyUp={this.props.handleKeyPress} tabIndex="0">
                {content}
                <Button onPress={this.loopSnakeMove} title="Start"/>
                <Button onPress={this.props.handleReset} title="Reset"/>
            </View>
        )
    }
}

export default Matrix