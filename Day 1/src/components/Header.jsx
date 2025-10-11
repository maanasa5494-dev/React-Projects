import image from "../assets/react.svg";
import {ChildComponent} from "./ChildComponent";
import stylesCss from  "./Header.module.css";

export default function Header({title, id, child2, children, backgroundColor, padding, ...props}) {
    console.log(props);
    const name = "React component";
    return <div id={id} {...props} style={{backgroundColor: backgroundColor, padding: padding + 'px'}}>
        <h1>{title}</h1>
        <h2>Description</h2>
        {child2}
        <img src={image}/>
        <div id="message" className={stylesCss.div}>
            {getMessage(name)}
            <ChildComponent>
                {children}
            </ChildComponent>
        </div>
    </div>
}


function getMessage(name) {
    return "Hi " + name;
}