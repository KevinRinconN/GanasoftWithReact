import { useState } from "react";
import { PropTypes } from "prop-types";

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState (value);

    const suma = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <h1>CounterApp..</h1>
            <h2>{counter}</h2>
            <button onClick={suma}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}