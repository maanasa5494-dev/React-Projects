import { useState } from "react";
export default function useInputValidation(value, validationFunction) {
    const [enteredValue, setEnteredValue] = useState(value);
    const [didEdit, setDidEdit] = useState(false);
    const isValid = validationFunction(enteredValue);

    function handleBlurEvent() {
        setDidEdit(true);
    }

    function handleValueChangeEvent($event) {
        const value = $event.target.value;
        setEnteredValue(value);
    }

    return {
        value: enteredValue,
        hasError: didEdit && !isValid,
        handleBlurEvent,
        handleValueChangeEvent
    }
}