import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Sign up data: ', data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log('Update profile: ', data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>This is the most safe website you ever visit</p>
        </div>

      </ReusableForm>
      <ReusableForm
        formTitle={'Profile update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>You can update your profile from here</p>
        </div>
      </ReusableForm> */}

    </>
  )
}

export default App
