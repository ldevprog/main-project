import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className={classes.counter}>Count is: {count}</div>
            <button onClick={() => setCount((prev) => ++prev)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
