

import {useState} from "react";

export default function StateComponent() {
    const [count, setCount] = useState(0);

    console.log("state render");
    return (
        <>
        <button onClick={()=> {setCount(prevCount => prevCount + 1)}}>Increment</button>
        <div>{count}</div>
        </>
    )
}