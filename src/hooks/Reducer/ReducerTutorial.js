import { useReducer } from "react";

const reducers = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

const ReducerTutorial = () => {
    const [countState, dispatch] = useReducer(reducers, {
        count: 0
    });

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };

    const handleDecrement = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button> | &nbsp; |
            <button onClick={handleDecrement}>Decrement</button>

            <br/>

            Current Count: {countState.count}
        </div>
    );
};

export default ReducerTutorial;