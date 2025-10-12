import {useRef, useState} from "react";

export default function RefComponent() {
    const emailRef = useRef();
    const [count, setCount] = useState(0);
    const countRef = useRef();

    function focusEmail() {
        console.log(emailRef.current);
        emailRef.current.focus();
        console.log(emailRef.current.value);
    }

    return <>
        <input ref={emailRef} type="email"></input>
        <button onClick={focusEmail}>Focus Email</button>
        <div>{count}</div>
        <button onClick={() => setCount(prevCount => prevCount+1)}>Inc Count</button>
        <div>{countRef.current}</div>
        <button onClick={() => countRef.current = count + 1}>Ref Count</button>
    </>
}