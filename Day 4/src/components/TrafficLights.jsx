import { useEffect, useRef, useState, useContext } from "react";
import Light from "./Light";
import {MyContext} from "../App"
;
const STATE_SHIFT = {
    'red': 'yellow',
    'yellow': 'green',
    'green': 'red'
};

export default function TrafficLights() {
    const [isActive, setActive] = useState('red');
    const timerRef = useRef();

    console.log("render traffic light");
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActive(prev => STATE_SHIFT[prev])
        }, 5000);
        return () => {
            clearInterval(timerRef.current);
        }
    }, []);
    
    return <div className="traffic-lights">
        <Light color="red" isActive={isActive === 'red'}></Light>
        <Light color="yellow" isActive={isActive === 'yellow'}></Light>
        <Light color="green" isActive={isActive === 'green'}></Light>
    </div>
}