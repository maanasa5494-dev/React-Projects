import InputComponent from "./InputComponent";
import { isValidEmail, isValidPassword } from "../utils/validations";
import useInputValidation from "../hooks/useInputValidation";
import { useNavigate } from "react-router";

export default function Login() {

    const {value: emailValue, hasError: emailHasError, handleBlurEvent: handleEmailBlur, handleValueChangeEvent: handleEmailValueChange} = useInputValidation("", isValidEmail);
    const {value: passwordValue, hasError: passwordHasError, handleBlurEvent: handlePasswordBlur, handleValueChangeEvent: handlePasswordValueChange} = useInputValidation("", isValidPassword);
    const navigate = useNavigate();

    function handleSubmit($event) {
        $event.preventDefault();

        const fd = new FormData($event.target);

        const data = Object.fromEntries(fd.entries());
        console.log("data");
        console.log(data);
        data.fruit = fd.getAll('fruit');

        if (emailHasError || passwordHasError) {
            return;
        }

        const payload = {
            email: emailValue,
            password: passwordValue
        };

        console.log("payload");
        console.log(payload);

        localStorage.setItem('login', JSON.stringify(payload));
        navigate('details');
    }


    return <form onSubmit={handleSubmit}>
            <InputComponent id="email" error={emailHasError} name="email" label="Email" 
                value={emailValue} onChange={handleEmailValueChange} onBlur={handleEmailBlur}>
            </InputComponent>

            <InputComponent id="password" error={passwordHasError} name="password" 
                label="Password" value={passwordValue} onChange={handlePasswordValueChange} onBlur={handlePasswordBlur}>
            </InputComponent>
            <button type="submit">Submit</button>
        </form>
}