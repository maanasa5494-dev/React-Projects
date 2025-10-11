export function ChildComponent({children}) {
    const divStyle = {backgroundColor: "white", color:"black", padding: "4px"};
    return <span>
    {children}
    <div style={divStyle} className="div">
        Div element with style
    </div>
    </span>
}