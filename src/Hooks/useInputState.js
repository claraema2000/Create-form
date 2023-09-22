import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

//By using array:
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    // return [value, handleChange];

// By using object:
    const onChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }
}

export default useInputState;
