// Various way to create a form:

// 1. use form tag, 
//   onSubmit handler with event (e),
//   from e access e.target.name-of-the-input-field.value

// 2. controlled element: use individual field state for each input field

// 3. controlled element: one object in a state holding all the input fields value

// 4. uncontrolled element: useRef to create a reference to the element & access value by using like: nameRef.current.value

// 5. use hook to handle states & submit & error. example: react hook form

// 5.1 reusable Component