import { useContext } from "react"
import { MyContext } from "../App"

export default function Light({color, isActive}) {
    const context = useContext(MyContext);
    console.log(context);
    console.log("render light");
    return <div className="light" style={{backgroundColor: isActive ? color : 'grey'}}></div>
}