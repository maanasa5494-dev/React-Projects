import {useState} from "react";

export default function FormComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    function handleSubmit($event) {
        $event.preventDefault();

        const fd = new FormData($event.target);

        const data = Object.fromEntries(fd.entries());
        console.log("data");
        console.log(data);
        data.fruit = fd.getAll('fruit');

        if (errors.email || errors.password) {
            return;
        }

        const payload = {
            email,
            password
        };

        console.log("payload");
        console.log(payload);

    }

    function handleEmailChange($event) {
        const value = $event.target.value;
        setEmail(value);
    }

    function handleEmailBlur($event) {
        const value = $event.target.value;
        if (!value.includes('@')) {
            setErrors(prevError => {
                return {
                    ...prevError,
                    email: true
                };
            });
        } else {
            setErrors(prevError => {
                return {
                    ...prevError,
                    email: false
                };
            });
        }
    }

    function handlePasswordChange($event) {
        const value = $event.target.value;
        setPassword(value);
    }

    function handlePasswordBlur($event) {
        const value = $event.target.value;
        if (value.length < 6) {
            setErrors(prevError => {
                return {
                    ...prevError,
                    password: true
                };
            });
        } else {
            setErrors(prevError => {
                return {
                    ...prevError,
                    password: false
                };
            });
        }
    }

    return <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur}></input>
                {errors.email ? <p>Enter valid email</p>: undefined}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="psd" value={password} onChange={handlePasswordChange} onBlur={handlePasswordBlur}></input>
                {errors.password ? <p>Enter valid password</p>: undefined}
            </div>
            <div>
                <input name="fruit" value="apple" label="apple" type="checkbox"></input>
                <label >Apple</label>
                <input name="fruit" value="orange" label="orange"type="checkbox"></input>
                <label>Orange</label>
            </div>
            <button type="submit">Submit</button>
        </form>
}