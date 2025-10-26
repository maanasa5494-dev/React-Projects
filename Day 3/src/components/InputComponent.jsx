export default function InputComponent({id, name, error, label, ...props}) {
    return  <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} name={name} {...props}></input>
                {error ? <p>Enter valid {label.toLowerCase()}</p>: undefined}
            </div>
}