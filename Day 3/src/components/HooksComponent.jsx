import { useEffect, useRef, useState } from "react"

export default function HooksComponent() {
    const [value, setValue] = useState("");
    const [x, setX] = useState(0);
    const inputRef = useRef();
    const timeRef = useRef();
    console.log(inputRef);

    useEffect(() => {
        console.log("use Effect" + value);
        timeRef.current = setTimeout(() => {
            setX(5);
            console.log("in timeout");
        }, 4000);
        return () => {
           console.log("destroy timer");
           clearTimeout(timeRef); 
        }
    }, [value]);

    return <div>
        <input ref={inputRef} value={value} onChange={(event) => {setValue(event.target.value)}}></input>
    </div>
} 