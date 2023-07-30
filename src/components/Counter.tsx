import { useState } from "react";
import "./Counter.scss";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Count is: {count}</div>
            <button onClick={() => setCount((prev) => ++prev)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
