const SimpleForm = () => {
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.userName.value);
        console.log(event.target.email.value);
        // console.log('Form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;