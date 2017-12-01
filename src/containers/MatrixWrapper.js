/**
 * Created by cuyu on 3/31/17.
 */
import Matrix from '../components/Matrix'
import {connect} from 'react-redux'
import {swipeDirections} from 'react-native-swipe-gestures';
import {resetMatrix, moveOn, changeDirection} from '../actions'
import {snakeState} from '../selectors'


const mapStateToProps = (state, ownProps) => {
    return {
        stop: snakeState(state).snake.dead,
        width: snakeState(state).matrix.width,
        height: snakeState(state).matrix.height,
        snakeLength: snakeState(state).matrix.snakeLength,
        difficulty: snakeState(state).matrix.difficulty,
    };  // TODO: use a `stop` state to manage the state.
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleReset: () => {
            dispatch(resetMatrix());
        },
        handleSwipe: (direction, state) => {
            const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
            switch (direction) {
                case SWIPE_LEFT:
                    dispatch(changeDirection('left'));
                    break;
                case SWIPE_UP:
                    dispatch(changeDirection('up'));
                    break;
                case SWIPE_RIGHT:
                    dispatch(changeDirection('right'));
                    break;
                case SWIPE_DOWN:
                    dispatch(changeDirection('down'));
                    break;
                default:
                    console.log('No effect for this gesture:');
            }
        },
        handleSnakeMove: () => {
            dispatch(moveOn());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);