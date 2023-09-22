import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('program');
    const emailState = useInputState('programming@hero.com');

    const handleSubmit = e => {
        console.log('Form Data:', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                value={name} onChange={handleNameChange}
                type="text" name="userName" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;